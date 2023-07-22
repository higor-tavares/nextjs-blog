---
title: 'Hello World in Rust'
date: '2023-07-22'
---

Today I will guide you from the first program using rust. Come with me and have fun programing in this amazin language :)  
## What is love (Rust)?
**Rust** is a compiled programing language that provides support to low level programing like C and C++ but it is a modern language that solve a lot of problems to you. to avoid security issues while doing your otimzations.

## Instaling rust
if you're using Linux or MacOs Run the flowing command
`curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`
else download the instaler for windows availabe on 
[https://forge.rust-lang.org/infra/other-installation-methods.html](https://forge.rust-lang.org/infra/other-installation-methods.html)

## First program
run the command  
`cargo new my_project`  
and then open the generated project on your favorite IDE or text editor.
you will see some files. inside src you will find a `main.rs` file. with this.
```
fn main() {
    println!("Hello, world!");
}
```

run the command    
`cargo run`  
and will print "Hello, world!" on your screen.  

Congratulations! You're a Rust Programer now!!

To learn more about Rust Programing language check out their [tutorial](https://doc.rust-lang.org/book/)
