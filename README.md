# ICTMethods.nl

**[Live link](https://www.ictmethods.nl/)**

As an ICT student or professional, you need to solve all kind of ICT challenges. Answering the questions and tackling the problems or opportunities of your ICT project requires research and often a combination of various ICT research methods. The toolkit on this website offers you a set of possible research methods and a framework to select the appropriate (combination of) methods.

> **Disclaimer:** I do not own any of this content. All the content and the physical Methods pack have been realised as, and are maintained by [HBO-i](https://www.hbo-i.nl/) projects. More info can be found in the [Copyright section](#copyright).

## Table of Contents

<table>
<tr>
<td align="center"><a href="#gear-installation">⚙️ Installation<a></td>
<td align="center"><a href="#zap-self-hosted-fonts-and-images">⚡️ Self-hosted fonts & images<a></td>
<td align="center"><a href="#memo-copyright">📝 Copyright<a></td>
</tr>
</table>

## :gear: Installation

### Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open

# or expose it to your local network, so it will be accessibile on other devices (like your phone)
npm run dev-expose
```

Copy `.env.example`, rename it to `.env` and fill all the values

### Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

### Testing

[Testing Library](https://testing-library.com/docs/svelte-testing-library/intro/) is being used for testing.

```bash
npm run test
```

### API

All the data is retrieved from an API. [Source code of the API](#).

## :zap: Self-hosted fonts and images

For this app all the fonts and images are self-hosted (read: put in the /static folder instead served from an API/CDN). You can read more about [self-hosting web fonts](https://fonts.google.com/knowledge/using_type/self_hosting_web_fonts).

Fonts add an extra 39.6kb and the images an extra of 719kb (total ~750kb). This makes the website size bigger, but improves the UX.

The difference in **load time is ~400ms** (in comparison with a CDN). 883ms vs 1.3s. Every image loads on average ~30% faster when self-hosted.

Of course, the site is bigger right now, but it doesn’t affect the users. It even benefits them with a faster [Onload Time](https://gtmetrix.com/blog/browser-timings/#onload-time) and [Fully Loaded Time](https://gtmetrix.com/blog/browser-timings/#fully-loaded-time).

## :memo: Copyright

As mentioned before: all of its contents and the physical Methods pack have been realised as, and are maintained by [HBO-i](https://www.hbo-i.nl/) projects.

The Method cards (except the domain specific cards) were written by:

- Wilco Bonestroo
- Marcel Meesters
- Ralph Niels
- Jan Dirk Schagen
- Koen van Turnhout

All Method cards were illustrated by:

- Laura Henneke
