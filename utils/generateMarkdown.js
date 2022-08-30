// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge;
  if (license==='N/A'){
    return "";
  }else{
    licenseBadge='![badge](https://img.shields.io/badge/license-'+ license + '-red.svg)'
    return licenseBadge;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
  if(license==='N/A'){
    return "";
  } else{
    if (license==='MIT'){
      licenseLink='https://opensource.org/licenses/'+license;
    } else {
      licenseLink='https://opensource.org/licenses/'+license+'-2.0';
    }
    return licenseLink;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licensePage;
  if(license==='N/A'){
    return "";
  }else{
    licensePage= 
    `## License
    ${license}: ${renderLicenseLink(license)}`
    return licensePage;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.steps}

  ## Usage
  ${data.instructions}

  ## Credits
  Collaborators: ${data.collaborators}
  
  How to contribute: ${data.howtocontribute}

  ${renderLicenseSection(data.license)}

  ## Tests
  ${data.tests}

  ## Questions
  To see more projects, visit my github page at https://github.com/${data.username}. If you have any questions regarding this project, feel free to contact me at ${data.email}.
`;
}

module.exports = generateMarkdown;
