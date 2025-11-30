# Telegram Integration Setup

This guide explains how to configure the contact form to send messages to a Telegram group.

## Prerequisites

1. A Telegram account
2. A Telegram bot (created via @BotFather)
3. A Telegram group or channel where you want to receive messages

## Step 1: Create a Telegram Bot

1. Open Telegram and search for [@BotFather](https://t.me/botfather)
2. Send `/newbot` command
3. Follow the instructions to name your bot
4. Copy the bot token (it looks like: `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`)

## Step 2: Get Your Chat ID

### For a Group:

1. Add your bot to the group where you want to receive messages
2. Make your bot an administrator (optional, but recommended)
3. Send a message in the group
4. Visit: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
5. Find the `chat` object in the response and look for `"id"` (this is your chat ID)
   - Group chat IDs are negative numbers (e.g., `-1001234567890`)

### For a Channel:

1. Create a channel
2. Add your bot as an administrator
3. Forward a message from the channel to [@userinfobot](https://t.me/userinfobot) to get the channel ID
   - Channel IDs start with `-100` (e.g., `-1001234567890`)

### Alternative Method (Using @userinfobot):

1. Add [@userinfobot](https://t.me/userinfobot) to your group
2. Send `/start` in the group
3. The bot will reply with the group's chat ID

## Step 3: Configure Environment Variables

Create a `.env.local` file in the project root (or set these in your hosting platform):

```env
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
```

### Important Notes:

- Never commit `.env.local` to version control (it's already in `.gitignore`)
- For production deployment (Vercel, Netlify, etc.), add these variables in your platform's environment settings
- Restart your development server after adding environment variables

## Step 4: Test the Integration

1. Start your development server: `npm run dev`
2. Go to the Contact page
3. Fill out and submit the form
4. Check your Telegram group/channel - you should receive a formatted message

## Troubleshooting

### Bot is not receiving messages:

- Ensure the bot is added to the group/channel
- Make sure the bot has permission to send messages
- Verify the chat ID is correct (negative for groups/channels)

### "Server configuration error":

- Check that both environment variables are set
- Restart your development server after setting environment variables
- Verify the bot token is correct

### "Failed to send message to Telegram":

- Verify the bot token is valid
- Check that the chat ID is correct
- Ensure the bot is an administrator (for channels)

## Message Format

Messages sent to Telegram will be formatted as:

```
🔔 New Contact Form Submission

👤 Name: [Name]
📧 Email: [Email]
🏢 Company: [Company] (if provided)
📋 Project Type: [Project Type]

💬 Message:
[Message content]

---
Time: [Timestamp] UTC
```

## Security Notes

- The bot token gives full access to your bot - keep it secure
- Never expose the bot token in client-side code
- Use environment variables for all sensitive configuration
- Consider adding rate limiting to prevent spam

