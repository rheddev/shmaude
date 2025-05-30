# Shmaude

## About This Project

Shmaude is a simple chatbot application created as a community learning project. Currently, Shmaude only echoes back what users say to it. For example, if you type "What is the meaning of life?", Shmaude will respond with "You said: What is the meaning of life?"

This project serves as a platform for those who want to:
- Practice contributing to open source projects
- Learn Git workflows
- Collaborate with other developers

**Failure is not only expected but encouraged in this pursuit of learning.** Every mistake is an opportunity to grow as a developer.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [Git](https://git-scm.com/)
- A GitHub account

### Setting Up Your Development Environment

1. **Fork the repository**
   - Visit the [Shmaude repository](https://github.com/rheddev/shmaude)
   - Click the "Fork" button in the top-right corner
   - Fork that repository

2. **Clone your forked repository**
   ```bash
   git clone https://github.com/[YOUR USERNAME HERE]/shmaude.git
   cd shmaude
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   
   This will start the development server at http://localhost:5173 (or another port if 5173 is in use).

## How to Contribute

### Git Workflow

- **Basic Git Commands**
  - `git clone`: Downloads a repository to your local machine
  - `git add`: Stages changes for commit
  - `git commit`: Records your changes with a message
  - `git push`: Uploads your commits to the remote repository
  - `git pull`: Downloads changes from the remote repository
  - `git checkout -b branch-name`: Creates and switches to a new branch

### Making Changes

1. Create a new branch for your feature
   ```bash
   git checkout -b your-feature-name
   ```

2. Make your changes to the codebase

3. Stage and commit your changes
   ```bash
   git add .
   git commit -m "Add feature: description of what you did"
   ```

4. Push your changes to your fork
   ```bash
   git push origin your-feature-name
   ```

### Creating a Pull Request

1. Go to your fork on GitHub
2. Click the "Pull Request" button
3. Click "New Pull Request"
4. Select your branch and provide a description of your changes
5. Click "Create Pull Request"

### Working with Issues

#### Finding Issues to Work On
1. Browse the [open issues](https://github.com/rheddev/shmaude/issues)
2. Comment on an issue you'd like to work on
3. Reference the issue number in your commits and PR using the # symbol (e.g., "Fix #42: resolved chat display bug")

#### Creating an Issue
If you find a bug or have a feature idea:

1. Go to the [Issues tab](https://github.com/rheddev/shmaude/issues)
2. Click "New issue"
3. Provide a clear title and detailed description
4. Add relevant labels if you have permission
5. Submit the issue

#### Best Practices for Issues
- Search existing issues before creating a new one
- Be specific and provide context
- For bug reports, include steps to reproduce
- Use clear, descriptive titles
- Include screenshots or code examples when helpful

## Contribution Ideas

Contributors are encouraged to enhance Shmaude's capabilities! Some ideas include:
- Implementing custom responses
- Creating a more engaging UI
- Adding new features entirely

## Acknowledgements

Huge props to [**VelianDev**](https://www.twitch.tv/veliandev) for the chatbot idea!

Thanks to [**the_real_book_lover**](https://www.twitch.tv/the_real_book_lover) for the idea of community-driven projects!

These two inspired this project and pushed me to finally make it happen. Please support them and give them their roses!

## License

This project is licensed under the terms found in the LICENSE file.

## Have Fun!

Remember, this project is about learning and growing together. Don't be afraid to try new things, ask questions, and help others along the way!
