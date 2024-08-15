import React from 'react'

export default function MyData(props) {
  return (
    <>
      <div className="container">
        <h1 className="sonu">
          This is coder sonu singh Bhardwaj {props.name} {props.post}
        </h1>
        <marquee style={{ color: "blue", fontSize: "20px" }} direction="up">
          <i>He is a web developer and software engineer</i>
        </marquee>

        <p>
          React.js is a popular open-source JavaScript library developed by
          Facebook for building user interfaces, particularly single-page
          applications. It allows developers to create reusable UI components,
          making it easier to develop and maintain large applications. React
          focuses on the "view" layer of the MVC (Model-View-Controller)
          architecture, allowing for efficient rendering and updating of UI
          elements.
        </p>

        <p>
          *) what is npm ? npm (Node Package Manager) and npx (Node Package
          Execute) are both tools that come with Node.js and are used in
          JavaScript development, particularly when working with Node.js and
          front-end frameworks like React. npm (Node Package Manager) Purpose:
          npm is a package manager for JavaScript. It allows you to install,
          manage, and share reusable code packages or libraries. Packages: A
          package is a collection of code files that serve a particular purpose,
          such as a library, framework, or tool. Registry: npm has a large
          registry where developers can publish their packages, making them
          available for others to use. Common npm Commands: npm install
          [package-name]: Installs a package from the npm registry. npm install:
          Installs all the dependencies listed in the package.json file. npm
          uninstall [package-name]: Uninstalls a package. npm init: Initializes
          a new project and creates a package.json file, which keeps track of
          your project's dependencies.
        </p>

        <p>
          *) what is npx? npx (Node Package Execute) Purpose: npx is a tool that
          comes with npm (since version 5.2.0) and is used to execute packages
          directly from the npm registry without having to install them
          globally. Convenience: npx allows you to run commands that are defined
          in a package without needing to install that package globally on your
          system. This is particularly useful for running one-time commands or
          tools. Common npx Use Cases: npx create-react-app my-app: This command
          creates a new React.js project. create-react-app is a package that npx
          executes directly without requiring a global installation. npx eslint
          .: Runs ESLint (a JavaScript linter) on your project without needing
          to install ESLint globally. Key Differences: npm is mainly for
          installing and managing packages. npx is for running packages
          directly, often used for one-off tasks. Would you like more details on
          how to us
        </p>
      </div>
    </>
  );
}
