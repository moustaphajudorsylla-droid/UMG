# Chat Application

## Instructions for Use
1. Clone the repository to your local machine using:
   ```bash
   git clone https://github.com/moustaphajudorsylla-droid/UMG.git
   ```
2. Navigate into the project directory:
   ```bash
   cd UMG
   ```
3. Install dependencies (if applicable):
   ```bash
   npm install
   ```
4. Start the application:
   ```bash
   npm start
   ```

## Deploying on GitHub Pages
1. Make sure you have a `gh-pages` branch in your repository.
2. Install the GitHub Pages package:
   ```bash
   npm install gh-pages --save-dev
   ```
3. Add this script to your `package.json`:
   ```json
   "scripts": {
       "deploy": "gh-pages -d build"
   }
   ```
4. Build the application:
   ```bash
   npm run build
   ```
5. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```
6. Your application should now be live at `https://<username>.github.io/<repository-name>`.

## Additional Resources
- [GitHub Pages Documentation](https://pages.github.com/)
- [React Documentation](https://reactjs.org/)

Feel free to reach out if you have any questions!