---
layout: ../layouts/AboutLayout.astro
title: "About"
---

Hi, I'm **Esakki Muthu** 👋!  
A **Backend Developer at Zoho** specializing in backend development using **Java**, and currently expanding my expertise in **Rust**.

I also have experience with **React**, **Node.js**, and **Python**. My curiosity drives me to explore the inner workings of systems, constantly asking *"why?"* to better understand how things work under the hood.  

### What I'm passionate about:
- Building efficient and scalable systems.
- Exploring new programming paradigms.
- Writing clean, maintainable, and effective code.

For more details, feel free to check out my [portfolio](https://esakkimuthu-portfolio.vercel.app/) or [GitHub](https://github.com/EsakkiMuthu-dev).

---

<div>
  <img src="/assets/dev.svg" class="sm:w-1/2 mx-auto" alt="coding dev illustration">
</div>

## My Tech Stack

Here’s a quick overview of the tools and technologies I work with:

### Backend
- **Java**, **Node.js**, **Python**, **Rust**, **Spring Boot**

### Databases
- **PostgreSQL**, **MySQL**, **MongoDB**, **SQLite**

### DevOps
- **Linux**, **Google Cloud**, **GitHub Actions**

### Frontend
- **React**, **HTML**, **CSS**, **JavaScript**

### Tools
- **Postman**, **VS Code**, **GitHub**, **Docker**, **IntelliJ**, **Firebase**

### Architectures
- **MVC**, **Microservices**, **Serverless**, **SPA**

---

### A Fun Introduction in Code 🧑‍💻

```rust
println!("👋 Hello there! Let’s meet Esakki Muthu!");

struct EsakkiMuthu {
    username: &'static str,
    name: &'static str,
    position: &'static str,
    blog: &'static str,
    socials: Socials,
    code: Code,
    architecture: [&'static str; 4],
}

struct Socials {
    github: &'static str,
    linkedin: &'static str,
}

struct Code {
    backend: [&'static str; 5],
    database: [&'static str; 4],
    devops: [&'static str; 3],
    frontend: [&'static str; 4],
    tools: [&'static str; 6],
}

fn main() {
    let me = EsakkiMuthu {
        username: "esakkimuthu",
        name: "Esakki Muthu",
        position: "Backend Developer at Zoho",
        blog: "https://esakkimuthu-portfolio.vercel.app/",
        socials: Socials {
            github: "https://github.com/EsakkiMuthu-dev",
            linkedin: "https://www.linkedin.com/in/esakkimuthu-esakki/",
        },
        code: Code {
            backend: ["Java", "Node.js", "Python", "Rust", "Spring Boot"],
            database: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
            devops: ["Linux", "Google Cloud", "GitHub Actions"],
            frontend: ["React", "HTML", "CSS", "JavaScript"],
            tools: ["Postman", "VS Code", "GitHub", "Docker", "IntelliJ", "Firebase"],
        },
        architecture: ["MVC", "Microservices", "Serverless", "SPA"],
    };

    println!(
        "{} is a {} who codes in {} and builds {}!",
        me.name,
        me.position,
        me.code.backend.join(", "),
        me.architecture.join(" and ")
    );
}
