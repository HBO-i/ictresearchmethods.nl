
# ictresearchmethods.nl

**[Live link](https://ictresearchmethods.nl/)**

As an ICT student or professional, you need to solve all kind of ICT challenges. Answering the questions and tackling the problems or opportunities of your ICT project requires research and often a combination of various ICT research methods. The toolkit on this website offers you a set of possible research methods and a framework to select the appropriate (combination of) methods.

## Table of Contents

<table>
<tr>
<td align="center"><a href="#gear-installation">⚙️ Installation<a></td>
<td align="center"><a href="#v-contributing">✌️ Contributing
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

### Husky

Husky is a package that includes a pre-commit Git hook. In this project it will run `npm run format` everytime you commit something. This makes sure that the code style will be applied by every contributor.

When you have never used Husky in this project before, run the following script:

```bash
npm run prepare-husky
```

## :v: Contributing

> 🚨 This part of the README will be supplemented later

You're more than welcome to contribute! If you don't want to contribute, but you have still some suggestions: let us know by creating a ticket. Just follow the steps in the template and submit your ticket.

If you want to contribute: have a look at the existing tickets or create your own one. Please always create a ticket of you want to change something. So we have an overview of what everyone is doing. 🙂

### Updating methods

We use [MDsveX](https://mdsvex.pngwn.io/) to convert MD files into JSON, which will be served as REST endpoints.

To update a method, navigate to `src/lib/content/methods` where all the methods are categorized. Locate the respective method's Markdown (MD) file and make your edits. Once you're done, create a pull request for your changes. The pull request will be reviewed by one of the core contributors and potentially merged.

#### Images

> **Note:** This applies only to method images. Other images can be added directly into HTML.

Method images are automatically served based on the slug. Therefore, ensure that the method's slug (in kebab-case) matches the name of the image file.

> For example, the method **Available product analysis** will have a kebab cased slug automatically generated as "available-product-analysis". So, the corresponding image file should be named **available-product-analysis.[ext]**.

To add method images, place them in the `/static/img/methods/[category]` folder. Make sure you put them in the correct folder and name them appropriately.

There are four types of images

1.  [method-name].jpg (w: 480, h: 720)
2.  [method-name].webp (w: 480, h: 720)
3.  /thumbnail/[method-name].jpg (w: 80, h: 120)
4.  /thumbnail/[method-name].webp (w: 80, h: 120)

Make sure you upload all four of these images. Although this approach may not be ideal, it currently suffices. There are some manual steps involved, but method changes are infrequent.

#### Prepare image

Follow these steps for each of the four image types:

1.  Visit [https://squoosh.app/](https://squoosh.app/) (Image tool by Google) and drag your image into the tool.
2.  Underneath "Compress" in the dropdown menu, select either WebP and/or Browser JPEG.
3.  Keep the suggested/default compression settings provided by Squoosh.
4.  Toggle "Resize" but do not modify any other settings except for width and height. Set them to the suggested values mentioned above.
5.  Click on "Save."
6.  Upload or add the image to the appropriate category.

### Git workflow

It's comparable with [Atlassian's Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow), but it's not exactly the same and `git flow init` is not being used.

#### Master (default)

The main/production branch that is being deployed and visible on https://ictresearchmethods.nl/.

#### Feature branches

Eventually there are feature branches where all the tasks/features are created in. These branches are based on the default branch: master.

When you create a pull request, Netlify will trigger and will create [Deploy Preview](https://docs.netlify.com/site-deploys/deploy-previews/) that will help the reviewer to review the changes.

There are four types op feature branches:

1. Docs (documentation tasks)
2. Bugfix (bug fix on development)
3. Hotfix (bug fix on production/master)
4. Feature (all other tasks)

Please use the following notation for your branches:

`[type]/[issue-number]/[kebab-cased-name]` (=> `feature/1/add-search-field`)

#### Summary

1. **`master`**
2. **`feature`** branch is created from `master`
3. When a `feature` is complete it is merged into `master`

This workflow was preferred by the creator and first maintainer. If someone has any suggestions, or it turns out this workflow isn't the best way of doing this. Please create a ticket and we can start a discussion.

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

This app is created by:

- [Jochem Vogel](https://www.jochemvogel.com)
