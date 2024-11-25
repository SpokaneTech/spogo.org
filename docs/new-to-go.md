---
title: New to Go?
editLink: true
---

# Go

If you know nothing about Go, here are a few key or interesting points that make it a great tool for our toolbox:

* It is statically typed and compiles to machine code so it is very fast.
* Compiling Go code is very fast, even for large projects. The Go compiler itself is written in Go.
* It has built-in support for concurrent programming with goroutines and channels.
* The standard library comes with everything you need to build web servers, handle HTTP requests, work with databases, and all of the usual tasks.
* You can write code on any platform and compile it for any other platform.
* It can be statically linked, which means you can create a single binary that contains everything you need to run your application without any external dependencies.
* There is a huge ecosystem of libraries and frameworks available for Go, making it easy to find tools for your specific needs.

A few things that you might use every day that were built with Go include things like: Docker, Kubernetes, Terraform, Prometheus, Grafana, Caddy, Ngrok, Minio, Etcd


## Documentation and Other Resources

* [Go.dev](https://go.dev) - Official Go site
* [Awesome Go/](https://awesome-go.com/) - A curated list of Go frameworks, libraries, and software.
* [r/golang](https://www.reddit.com/r/golang/) - A subreddit for Go developers.
* [Gophers Slack](https://gophers.slack.com/) - A Slack community for Go developers.
* [Spokane Tech Group Discord](https://discord.gg/B9dfrQVD) - A Discord server for the Spokane Tech Group. Join the Go channel to chat with other Go developers in the area.

## Joe Riddle's Links

### Learn go
- [Tour of Go](https://go.dev/tour/welcome/1)
- [How to Write Go Code](https://go.dev/doc/code)
- [Effective Go](https://go.dev/doc/effective_go)
- [Practical Go](https://dave.cheney.net/practical-go)
- Read the stdlib
- [Go by example](https://gobyexample.com/)
### Further Readings
- [Go at Google: Language Design in the Service of Software Engineering](https://go.dev/talks/2012/splash.article)
### Videos to Watch
- [An Introduction To Generics (Official)](https://go.dev/blog/intro-generics)
- [Interfaces 101 : Implementing Generics with Interfaces](https://www.youtube.com/watch?v=34ZmIfWOb0U)
- [A gentle introduction to Pointers](https://www.alexedwards.net/blog/a-gentle-introduction-to-pointers)
- [Go – On The Shoulders of Giants](https://spf13.com/presentation/on-the-shoulders-of-giants/)
- [Concurrency is not Parallelism by Rob Pike](https://www.youtube.com/watch?v=oV9rvDllKEg)
- [Go Class](https://www.youtube.com/playlist?list=PLoILbKo9rG3skRCj37Kn5Zj803hhiuRK6)
### Links
- [Builtins](https://pkg.go.dev/builtin)
- [Type assertions](https://go.dev/tour/methods/15)
- [Go source code](https://cs.opensource.google/go/go/+/refs/tags/go1.21.0:src/)
- [`Printf` specifiers](https://cplusplus.com/reference/cstdio/printf/)


## Installing Go

To install Go on a mac, use brew:

```bash
brew install go
```

## Starting a New Project

To start a new Go project, follow these steps:

1. Create a new directory for your project.
2. Initialize a new Go module by running `go mod init <module-name>` where `<module-name>` is the name of your project.
    *Note: The module name is usually the repository URL but can be any name such as `myapp` or `gitlab.com/limelyte/client/myapp`*
3. Create the recommended project structure as shown below.

## Project Structure

In general, Go doesn't care how you structure your project and it can be as simple as having a single main.go file for small utility applications. That said, when creating a new Go project it is important to follow a consistent structure, especially for larger projects. Here is a recommended project structure for a Go application that follows best practices and works well for most applications:

```
myapp/
├── cmd/               --> Main binaries for this project under cmd. You can have multiple binaries in a single project.
│   └── myapp/
│       └── main.go    --> Entry point of this binary. This will be the "main" package.
│    └── myapp2/
│       └── main.go    --> Entry point of another binary. This will also be the "main" package for this binary.
├── internal/          --> Private application and library code specific to this project
│   ├── handlers/      --> HTTP request handlers or controllers. If this is package "handlers" it will be referenced as "myapp/internal/handlers"
│   ├── models/        --> Data models: package "models" referenced as "myapp/internal/models"
│   ├── service/       --> Other business logic, services, etc. referenced as "myapp/internal/service"
│   ├── templates/     --> HTML templates
│   └── util/          --> Utility functions: referenced as "myapp/internal/util"
├── pkg/               --> Public application and library code that can be used by other projects 
│   └── mypackage/         This may not be used in all projects
├── configs/           --> Configuration files
│   └── config.yaml    
├── go.mod             --> Go module file,  this is auto-generated
├── go.sum             --> Go module dependencies, this is auto-generated
├── .env               --> Environment variables
├── Makefile           --> Makefile for build automation
└── README.md          --> Project documentation / readme

```

A simple command line application can be structured similarly could omit the `internal`, `pkg`, and `configs` directories if they are not needed as outlined below:

```
myapp/
├── cmd/
│   └── myapp/
│       └── main.go
├── go.mod
├── go.sum
└── README.md
```

## Running the Application

To run your Go application in the above structure, you can use the following command from the root of your project:

```bash
go run ./cmd/myapp/*.go
```

This will build and run the myapp binary and will ensure that all dependencies are included.

## Adding Packages and Dependencies

To add a new dependency to your Go project, use the following command:

```bash
go get <dependency>
```

## Favorite Go Packages, Tools and Libraries

* [Gin Gonic](https://github.com/gin-gonic/gin) - A web framework for Go and provides features like routing, middleware, and more.
* [Gorm](https://gorm.io/) - An ORM library for Go that provides a simple and powerful way to interact with databases.
* [Cobra](https://github.com/spf13/cobra) - A library for creating powerful command-line applications.
* [Go Dotenv](https://github.com/joho/godotenv) - A library to load environment variables from a `.env` file.
* [Casbin](https://casbin.org/) - An authorization library that supports access control models like ACL, RBAC, and ABAC.
* [GJSON](https://github.com/tidwall/gjson) - A library for parsing JSON with a simple syntax and fast performance.
* [SJSON](https://github.com/tidwall/sjson) - A library that provides very fast JSON manipulation.
* [ModernC Sqlite](https://pkg.go.dev/modernc.org/sqlite) - A SQLite driver for Go that is easy to use and integrates well with the standard library and does NOT depend on CGO (meaning you can build it statically without C dependencies).
* [TinyGo](https://tinygo.org/) - A Go compiler that is designed for small places, like microcontrollers and WebAssembly.
* [Gobot](https://gobot.io/) - A framework for robotics, drones, and the Internet of Things (IoT).
* [GoReleaser](https://goreleaser.com/) - A release automation tool for Go projects.
