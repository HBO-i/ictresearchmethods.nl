# ICTMethods.nl

**[Live link](https://v2.ictmethods.nl/)**

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

You're more than welcome to contribute! If you don't want to contribute, but you have still some suggestions: let us know by creating a ticket. Just follow the steps in the template and submit your ticket.

If you want to contribute: have a look at the existing tickets or create your own one. Please always create a ticket of you want to change something. So we have an overview of what everyone is doing. 🙂

### Updating methods

[MDsveX](https://mdsvex.pngwn.io/) is being used to convert MD files into JSON (which will be served as REST endpoints).

In `src/lib/content/methods` you'll find all the methods categorized by their category. You can edit the md file and create a pull request. This one will be reviewed (and potentially) merged by one of the core contributors.

### Git workflow

It's comparable with [Atlassian's Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow), but it's not exactly the same and `git flow init` is not being used.

#### Master

The main/production branch that is being deployed and visible on https://ictmethods.nl/.

#### Development (default)

Default branch where all the pull requests are merged to.

Development branch is visible on https://dev.ictmethods.nl/

#### Release

In the workflow between development and master. For every release a new branch is created (i.e. `release/0.1.0` or `release/1.0.5` ([semantic versioning](https://semver.org/))).

The development branch will be merged into this branch and every new change will be tested to make sure there are no bugs in production. Once everything works, this branch will be merged into master and a new release (tag) will be created.

Release branch is visible on the deploy preview in the pull request.

#### Feature branches

Eventually there are feature branches where all the tasks/features are created in. These branches are based on the default branch: development.

There are four types op feature branches:

1. Docs (documentation tasks)
2. Bugfix (bug fix on development)
3. Hotfix (bug fix on production/master)
4. Feature (all other tasks)

Please use the following notation for your branches:

`[type]/[issue-number]/[kebab-cased-name]` (=> `feature/1/add-search-field`)

#### Summary

1. **`master`**
2. **`release`** branch is created from `master`
3. **`development`** branch is created from `release`
4. **`feature`** branch is created from `development`
5. When a `feature` is complete it is merged into `development`
6. When the release branch is done it is merged into `development` and `main`

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
