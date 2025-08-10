"use client";

import React, { ReactNode, useEffect } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ open, onClose, children }: ModalProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  console.log("Modal open:", open);
  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        color: "white",
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "rgb(0, 0, 0)",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "500px",
          width: "90%",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button
          onClick={onClose}
          style={{
            marginTop: "10px",
            padding: "10px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Закрыть
        </button>
      </div>
    </div>
  );
}
