"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const [errors, setErrors] = useState({
    fullName: "",
    phone: "",
    email: "",
    birthDate: "",
  });

  // Validation functions
  const validateFullName = (value: string) => {
    const words = value.trim().split(" ");
    if (words.length < 2) return "Full name must contain at least 2 words";
    if (words.some((word) => /^\d/.test(word)))
      return "Words cannot start with a number";
    return "";
  };

  const validatePhone = (value: string) => {
    if (!/^\d*$/.test(value)) return "Phone must contain only numbers";
    return "";
  };

  const validateEmail = (value: string) => {
    if (!/^\S+@\S+\.\S+$/.test(value)) return "Invalid email format";
    return "";
  };

  const validateBirthDate = (value: string) => {
    if (!value) return "Birth date is required";
    const today = new Date();
    const birth = new Date(value);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    if (age < 18) return "You must be at least 18 years old";
    return "";
  };

  // Handlers
  const handleFullName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
    setErrors((prev) => ({
      ...prev,
      fullName: validateFullName(e.target.value),
    }));
  };

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    setErrors((prev) => ({ ...prev, phone: validatePhone(e.target.value) }));
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setErrors((prev) => ({ ...prev, email: validateEmail(e.target.value) }));
  };

  const handleBirthDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthDate(e.target.value);
    setErrors((prev) => ({
      ...prev,
      birthDate: validateBirthDate(e.target.value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const fullNameError = validateFullName(fullName);
    const phoneError = validatePhone(phone);
    const emailError = validateEmail(email);
    const birthDateError = validateBirthDate(birthDate);

    setErrors({
      fullName: fullNameError,
      phone: phoneError,
      email: emailError,
      birthDate: birthDateError,
    });

    if (!fullNameError && !phoneError && !emailError && !birthDateError) {
      // כאן אפשר לקרוא ל-API אמיתי אם תרצי:
      // await fetch("/api/register", { method: "POST", body: JSON.stringify({ fullName, phone, email, birthDate }) });

      // איפוס הטופס
      setFullName("");
      setPhone("");
      setEmail("");
      setBirthDate("");

      // ניווט לעמוד המוצרים
      router.push("/products");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Registration Form</h2>

      <label className={styles.label}>Full Name</label>
      <input
        className={styles.input}
        type="text"
        value={fullName}
        onChange={handleFullName}
      />
      {errors.fullName && (
        <span className={styles.error}>{errors.fullName}</span>
      )}

      <label className={styles.label}>Phone</label>
      <input
        className={styles.input}
        type="text"
        value={phone}
        onChange={handlePhone}
      />
      {errors.phone && <span className={styles.error}>{errors.phone}</span>}

      <label className={styles.label}>Email</label>
      <input
        className={styles.input}
        type="email"
        value={email}
        onChange={handleEmail}
      />
      {errors.email && <span className={styles.error}>{errors.email}</span>}

      <label className={styles.label}>Birth Date</label>
      <input
        className={styles.input}
        type="date"
        value={birthDate}
        onChange={handleBirthDate}
      />
      {errors.birthDate && (
        <span className={styles.error}>{errors.birthDate}</span>
      )}

      <button className={styles.submitButton} type="submit">
        Register
      </button>
    </form>
  );
}
