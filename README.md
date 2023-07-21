# VaultWise

https://vaultwise.kylemalice.info/

## Description

VaultWise is a cutting-edge personal bank statement tracker and AI assistant that utilizes React, JavaScript, and CSS to ensure a seamless user experience across various devices. Whether users choose to securely sign in or explore as guests, VaultWise offers a range of features to optimize financial management. By analyzing uploaded bank statements, VaultWise provides a comprehensive summary of income, expenses, and transactions. Additionally, a dynamic graph visually represents monthly bank balance trends. Currently, VaultWise is in the process of developing an AI toolbox that harnesses the power of GPT 3.5 Turbo. This toolbox is specifically designed to guide users towards achieving their financial goals. Ultimately, VaultWise strives to simplify finance management, provide valuable insights, and foster interactive user experiences. To facilitate the complete VaultWise experience, a fabricated bank statement csv file is available.
[Download Example CSV](https://github.com/MaliceKy/VaultWise-Expense-AI-project/blob/main/public/VaultWiseExampleCSV.csv)
## Technologies

This project is built using the following technologies:

- JavaScript
- React
- CSS
- HTML

## How it Works

Users can access the VaultWise platform via [this link](https://vaultwise.kylemalice.info/). After signing up or logging in as a guest, users can upload a CSV file containing their bank statements. VaultWise then analyzes this data, providing a summary of income, expenses, and transactions. Users can view their transaction history and a dynamic graph that displays the trend of their account balance. Additionally, users can access a chat interface powered by GPT 3.5 Turbo, which provides insights and guidance based on their statement data.

The sequence diagram below provides a visual representation of the interaction between the user, VaultWise, the bank statement, and the AI component:

![Sequence Diagram](https://showme.redstarplugin.com/d/dx1PktKV)
[View diagram in new tab](https://showme.redstarplugin.com/d/dx1PktKV)

Here's a step-by-step breakdown of the process:

1. **User Sign In/Guest Account:** Users first access the VaultWise platform [here](https://vaultwise.kylemalice.info/). They can either sign up for a new account or use a guest account.

2. **Upload CSV Bank Statement:** Once logged in, users can upload a CSV file containing their bank statement data.

3. **Analyze Bank Statement:** VaultWise then analyzes the uploaded bank statement. It processes the data, summarizing income, expenses, and transactions.

4. **Return Summary:** The bank statement analysis results in a summary of the user's financial data. This summary is then returned to VaultWise.

5. **Display Transaction History and Account Balance Graph:** VaultWise presents the user with their transaction history and a dynamic graph that displays the trend of their bank balance over time.

6. **Access AI Chat:** Users also have the option to access an AI chat feature.

7. **Leverage GPT 3.5 Turbo:** The AI chat feature leverages GPT 3.5 Turbo to provide insights and guidance based on the user's statement data.

8. **Provide Insights:** The AI component provides insights and guidance to the user, helping them understand their financial situation better and make informed decisions.

This sequence of interactions ensures a seamless and interactive user experience, making finance management simpler and more insightful.


## How to Run Locally

To run VaultWise locally, follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies by running `npm install`.
3. Create a `.env` file in the root directory of the project.
4. In the `.env` file, add the following line: `REACT_APP_OPENAI_API_KEY = "Your OpenAI API Key"`.
5. Obtain an OpenAI API key by creating an account or logging into your existing account on the [OpenAI platform](https://platform.openai.com/docs/api-reference/authentication). Navigate to "View API Keys" and create a new key if necessary. Copy this key and replace "Your OpenAI API Key" in the `.env` file with your actual key.
6. Once the setup is complete, start the React application by running `npm start`.

The application should now be running on your local machine.
