import React, { useState } from "react";
import styles from "../../styles/formulario.module.css";
import Link from "next/link";
const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);

    setFormData({
      name: "",
      email: "",
      password: "",
      password2: ""
    });
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Formulário</h1>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Nome*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={styles.input}
            value={formData.name}
            onChange={handleChange}
            placeholder="Nome e sobrenome"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
            placeholder="O seu melhor e-mail"
          />
        </div>


        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>
            Senha
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className={styles.input}
            value={formData.password}
            onChange={handleChange}
            placeholder="Pelo menos 6 caracteres"
          />
        </div>


        <div className={styles.formGroup}>
          <label htmlFor="password2" className={styles.label}>
            Insira a senha nova mais uma vez
          </label>
          <div className={styles.formGroup}>
            <input
              type="password"
              id="password2"
              name="password2"
              className={styles.input}
              value={formData.password2}
              onChange={handleChange}
              required
              placeholder="Insira a senha nova mais uma vez"
            />
          </div>
        </div>

        <button type="submit" className={styles.button}>
          Cadastrar
        </button>
        <Link href="/pageapi">
          <button type="button" className={styles.button}>
            Não sei o meu CEP
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Form;
