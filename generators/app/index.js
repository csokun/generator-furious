"use strict";

const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the primo ${chalk.red("generator-furious")} generator!`)
    );

    const prompts = [
      {
        type: "input",
        name: "projectName",
        message: "Project name",
        default: "fastify-furious"
      },
      {
        type: "input",
        name: "projectDescription",
        message: "Project description"
      },
      {
        type: "input",
        name: "projectVersion",
        message: "Project version",
        default: "1.0.0"
      },
      {
        type: "input",
        name: "authorName",
        message: "Author name"
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath(),
      this.destinationPath(this.props.projectName),
      {
        globOptions: {
          ignore: ["**/node_modules/**"],
          dot: true
        }
      }
    );

    const pkgJson = {
      name: this.props.projectName,
      version: this.props.projectVersion,
      description: this.props.projectDescription,
      author: this.props.authorName
    };

    this.fs.extendJSON(
      this.destinationPath("./" + this.props.projectName + "/package.json"),
      pkgJson
    );
  }

  install() {
    this.destinationRoot("./" + this.props.projectName + "/src");
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: false
    });
  }
};
