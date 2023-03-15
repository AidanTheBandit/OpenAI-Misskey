import * as Misskey from 'calckey-js';
import * as dotenv from 'dotenv';
//import openai from 'openai';

dotenv.config();

const client = new Misskey.api.APIClient({
  origin: 'https://barkle.chat',
  credential: process.env.MISSKEY_API_KEY || '',
});

const stream = new Misskey.Stream('https://barkle.chat', { token: process.env.MISSKEY_API_KEY || ''});
const mainChannel = stream.useChannel('main');
mainChannel.on('notification', notification => {
	console.log('notification received', notification);
});

//const openaiClient = new openai.(process.env.OPENAI_API_KEY || '');

/*
Misskey.Stream('notification', async (notification: Misskey.api.NoteCreated) => {
  if (notification.type === 'mention') {
    const note = await client.getNote(notification.noteId);
    const prompt = `Complete the following sentence:\n\n${note.text}\n\nContinuation:`;

    const completions = await openaiClient.complete({
      engine: 'davinci',
      prompt,
      maxTokens: 60,
      n: 1,
      stop: ['\n'],
    });

    const completion = completions.choices[0].text.trim();

    if (completion !== '') {
      await client.createNote({
        visibility: note.visibility,
        text: `@${note.user.username} ${completion}`,
        cw: note.cw,
        visibilityPrivate: note.visibilityPrivate,
        replyId: note.id,
      });
    }
  }
});*/
