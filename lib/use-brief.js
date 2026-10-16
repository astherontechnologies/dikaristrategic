"use client";

import { useEffect, useRef, useState } from "react";

const email = "dikaristrategic@gmail.com";
const initialFields = {
  mode: "Brand baru",
  nama: "",
  brand: "",
  waktu: "1 sampai 3 bulan",
  cerita: "",
};

async function copyText(text, element) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const range = document.createRange();
    range.selectNodeContents(element);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    return false;
  }
}

export function useBrief() {
  const [fields, setFields] = useState(initialFields);
  const [status, setStatus] = useState(
    "Brief terisi otomatis saat kamu mengetik.",
  );
  const [emailStatus, setEmailStatus] = useState("SALIN");
  const outputRef = useRef(null);
  const copyRef = useRef(null);
  const emailRef = useRef(null);
  const timerRef = useRef(null);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      window.clearTimeout(timerRef.current);
    };
  }, []);

  const briefLines = [
    ["Mode   ", fields.mode],
    ["Nama   ", fields.nama],
    ["Brand  ", fields.brand],
    ["Waktu  ", fields.waktu],
    ["Cerita ", fields.cerita],
  ].map(([label, value]) => label + ": " + (value.trim() || "-"));
  const briefText = ["BRIEF PROYEK UNTUK DIKARI STRATEGIC", ...briefLines].join(
    "\n",
  );
  // Follow the original terminal renderer, including multiline story formatting.
  const lines = briefLines
    .join("\n")
    .split("\n")
    .map((line) => {
      const [label, ...value] = line.split(":");
      return [label, value.join(":")];
    });

  const change = (event) => {
    const { name, value } = event.target;
    setFields((previous) => ({ ...previous, [name]: value }));
  };

  const submit = (event) => {
    event.preventDefault();
    setStatus("Brief siap. Salin, lalu kirim ke " + email + ".");
    copyRef.current.focus();
  };

  const copyBrief = async () => {
    const copied = await copyText(briefText, outputRef.current);
    if (mounted.current)
      setStatus(
        copied
          ? "Brief tersalin. Kirim ke " + email + "."
          : "Teks brief sudah diblok, tekan Cmd/Ctrl+C untuk menyalin.",
      );
  };

  const copyEmail = async () => {
    const copied = await copyText(email, emailRef.current);
    if (!mounted.current) return;
    setEmailStatus(copied ? "TERSALIN" : "BLOK + COPY");
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setEmailStatus("SALIN"), 1800);
  };

  return {
    fields,
    change,
    submit,
    lines,
    status,
    copyBrief,
    copyEmail,
    emailStatus,
    outputRef,
    copyRef,
    emailRef,
  };
}
