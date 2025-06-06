# Change log

## 8.1.2

### Patch Changes

- [#3658](https://github.com/adobe/spectrum-css/pull/3658) [`e9fde67`](https://github.com/adobe/spectrum-css/commit/e9fde67bf341798a6ab34f227b2e7a417d1e5da7) Thanks [@rise-erpelding](https://github.com/rise-erpelding)! - Change S2 theme border color to gray-800 on keyfocus per design request in order to align with text field.

## 8.1.1

### Patch Changes

📝 [#3593](https://github.com/adobe/spectrum-css/pull/3593) [`d829abb`](https://github.com/adobe/spectrum-css/commit/d829abb44f1eaa1874090e52caee553d776684e7) Thanks [@TarunAdobe](https://github.com/TarunAdobe)!

Updated `--spectrum-search-background-color-disabled` to `--spectrum-gray-25` and `--spectrum-search-border-color-disabled` to `--spectrum-gray-300` for the S2 foundations contexts.

Also defines disabled quiet border and background colors (`--system-search-quiet-background-color-disabled` and `--system-search-quiet-border-color-disabled`) in order to maintain disabled quiet styling.

## 8.1.0

### Minor Changes

📝 [`205182b`](https://github.com/adobe/spectrum-css/commit/205182bebcbe82813457aa098d8799b0a23423ee) Thanks [@castastrophe](https://github.com/castastrophe)!

## New feature

Minified and gzipped outputs available for all compiled CSS assets.

### Patch Changes

📝 [#3541](https://github.com/adobe/spectrum-css/pull/3541) [`1a3245c`](https://github.com/adobe/spectrum-css/commit/1a3245c3a660bc52ed260f18b6cceab5ee81541d) Thanks [@castastrophe](https://github.com/castastrophe)!

Dependency alignment across the project.

- Updated dependencies [[`205182b`](https://github.com/adobe/spectrum-css/commit/205182bebcbe82813457aa098d8799b0a23423ee), [`9b108f7`](https://github.com/adobe/spectrum-css/commit/9b108f7e05df1f55ab315dad96736d3ff4757f8c), [`1a3245c`](https://github.com/adobe/spectrum-css/commit/1a3245c3a660bc52ed260f18b6cceab5ee81541d)]:
  - @spectrum-css/clearbutton@8.0.0
  - @spectrum-css/icon@9.1.0
  - @spectrum-css/textfield@9.0.0
  - @spectrum-css/tokens@16.0.1

## 8.0.1

### Patch Changes

📝 [#3534](https://github.com/adobe/spectrum-css/pull/3534) [`68e0057`](https://github.com/adobe/spectrum-css/commit/68e00577156cc32b21bfa768dbd2d35d73563b4c) Thanks [@castastrophe](https://github.com/castastrophe)!

Fixes a bug in the content of the `dist/index-theme.css` file.

Expected `index-theme.css` to include the component selectors with component-level custom properties mapped to the `--system` prefixed ones in order to allow a component to support various contexts.

Expected output example for the index-theme.css:

```css
.spectrum-ActionButton {
  --spectrum-actionbutton-background-color-default: var(--system-action-button-background-color-default);
  --spectrum-actionbutton-background-color-hover: var(--system-action-button-background-color-hover);
```

- Updated dependencies [[`68e0057`](https://github.com/adobe/spectrum-css/commit/68e00577156cc32b21bfa768dbd2d35d73563b4c)]:
  - @spectrum-css/clearbutton@7.0.1
  - @spectrum-css/icon@9.0.1
  - @spectrum-css/textfield@8.0.1

## 8.0.0

### Major Changes

📝 [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`6c19fcf`](https://github.com/adobe/spectrum-css/commit/6c19fcf3f0eda76987f338981ae20f9999febce6) Thanks [@pfulton](https://github.com/pfulton)!

### 🛑 Breaking change

This major update creates a bridge between the Spectrum 1 (S1) and Spectrum 2 (S2) designs, dubbed "Spectrum 2 Foundations". These do _NOT_ reflect a fully migrated S2 component. This approach allows consumers to swap the appearance of their components between S1, Express, and S2 by leveraging a "system" layer that remaps the necessary component-level tokens to the appropriate token dataset.

For these components to appear S2, you must load the assets with the `@spectrum-css/tokens` at `v16` or higher.

For S1 or Express, load assets with the `@spectrum-css/tokens` at `v14.x` or `v15.x`.

If you are looking to implement a fully S2 design, please explore the `next` tag releases instead of using this foundations release. **This release is used in Spectrum Web Components 1.x**.

### Deprecations

The `metadata` folder containing the `mods.md` and `metadata.json` assets has been removed from source. To find information about the components including what selectors, modifiers, and passthroughs are used, please see the `dist/metadata.json` asset shipped with every component containing CSS.

The `index-vars.css` asset has been removed in this release as it was previously deprecated and is no longer maintained. Please use the `index.css` or `index-base.css`

### File usage

If you are rendering components and need **only** the S2 Foundations styles, you can make use of the `index.css` asset which contains all the base styles plus the system mappings for S2 Foundations.

If you are using this version to publish **only** an S1 or Express component, you can use the `index-base.css` plus the desired `themes/(spectrum|express).css` file.

To render a component that can be easily swapped between the S2 Foundations, S1, or Express contexts, load `index-base.css` with the `index-theme.css` file and leverage the appropriate context classes (`.spectrum--legacy` for S1 and `.spectrum--express` for Express).

### Patch Changes

- Updated dependencies [[`6c19fcf`](https://github.com/adobe/spectrum-css/commit/6c19fcf3f0eda76987f338981ae20f9999febce6), [`3d08cea`](https://github.com/adobe/spectrum-css/commit/3d08cea0f590c8c2de7252677a6b81b8cc206b9a), [`6c19fcf`](https://github.com/adobe/spectrum-css/commit/6c19fcf3f0eda76987f338981ae20f9999febce6)]:
  - @spectrum-css/tokens@16.0.0
  - @spectrum-css/clearbutton@7.0.0
  - @spectrum-css/textfield@8.0.0
  - @spectrum-css/icon@9.0.0

## 7.5.1

### Patch Changes

📝 [#3522](https://github.com/adobe/spectrum-css/pull/3522) [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39) Thanks [@castastrophe](https://github.com/castastrophe)!

- Peer dependency for @spectrum-css/tokens updated to include v15 as well as v14.

- Updated dependencies [[`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39), [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39)]:
  - @spectrum-css/tokens@15.2.0
  - @spectrum-css/clearbutton@6.5.1
  - @spectrum-css/textfield@7.4.1
  - @spectrum-css/icon@8.0.1

## 7.5.0

### Minor Changes

📝 [#3502](https://github.com/adobe/spectrum-css/pull/3502) [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b) Thanks [@castastrophe](https://github.com/castastrophe)!

- Simplify how the `--system` properties are mapped. By updating the logic in the `postcss-add-theming-layer`, we are now shipping cleaner, more readable `--system` property names. These custom properties are documented as _NOT_ a part of the component API so although these result in a change to the custom property names, it does not impact the properties that are in the API and so do not constitute a breaking change. Expect to see no change to how component theming works or any visual regressions as a result of this change.

### Patch Changes

- Updated dependencies [[`c8194b0`](https://github.com/adobe/spectrum-css/commit/c8194b0a5b6e115d7db680f287eb8a2a9709906b), [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b), [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b)]:
  - @spectrum-css/tokens@15.1.0
  - @spectrum-css/icon@8.0.0
  - @spectrum-css/clearbutton@6.5.0
  - @spectrum-css/textfield@7.4.0

## 7.4.0

### Minor Changes

📝 [#3372](https://github.com/adobe/spectrum-css/pull/3372) [`61af074`](https://github.com/adobe/spectrum-css/commit/61af0743f874d799b8fbb789aff8ad2580c5994a) Thanks [@cdransf](https://github.com/cdransf)!

- This change removes the existing calc function used to calculate the padding-inline-end for S1 and the quiet variant in favor of a simpler value with a mod preceding a static value.

  This change removes the `--mod-search-quiet-button-offset` mod.

## 7.3.0

### Minor Changes

📝 [#3369](https://github.com/adobe/spectrum-css/pull/3369) [`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb) Thanks [@castastrophe](https://github.com/castastrophe)!

- Remove the storybook assets from the shipped output for components

### Patch Changes

- Updated dependencies [[`9c49505`](https://github.com/adobe/spectrum-css/commit/9c4950517bf0f8ca7b2e373f4323c97d068d0ceb)]:
  - @spectrum-css/clearbutton@6.4.0
  - @spectrum-css/textfield@7.3.0
  - @spectrum-css/icon@7.2.0

## 7.2.4

### Patch Changes

📝 [#3297](https://github.com/adobe/spectrum-css/pull/3297) [`60685ce`](https://github.com/adobe/spectrum-css/commit/60685ce14d1117584ca46d034ecaa2617a016345) Thanks [@castastrophe](https://github.com/castastrophe)!

- Deprecated `--mod-workflow-icon-size-100` from the `.spectrum-Search--quiet` calculation of the `--spectrum-search-quiet-button-offset`. Use `--mod-search-icon-size` instead. Deprecated property will be removed in the next breaking change release.

## 7.2.3

### Patch Changes

📝 [#3300](https://github.com/adobe/spectrum-css/pull/3300) [`89797d0`](https://github.com/adobe/spectrum-css/commit/89797d0324bcbf2195a28840ce87ed6959da24a5) Thanks [@castastrophe](https://github.com/castastrophe)!

- Add passthrough markers to prevent unnecessary warnings about unused custom properties

## 7.2.2

### Patch Changes

📝 [#3295](https://github.com/adobe/spectrum-css/pull/3295) [`62e2b76`](https://github.com/adobe/spectrum-css/commit/62e2b76f1fed5c0fb60049826b05eaa9162f21e2) Thanks [@cdransf](https://github.com/cdransf)!

- Resolves lint violation in search by moving spectrum-search-color custom property above style declarations.

## 7.2.1

### Patch Changes

📝 [#3270](https://github.com/adobe/spectrum-css/pull/3270) [`008bb34`](https://github.com/adobe/spectrum-css/commit/008bb34a0bbefd1abeb0d37bcdb179811dd9df3c) Thanks [@cdransf](https://github.com/cdransf)!

- Removes unnecessary stylelint-disable comments now that rule is disabled in config.

## 7.2.0

### Minor Changes

📝 [#3222](https://github.com/adobe/spectrum-css/pull/3222) [`0acd811`](https://github.com/adobe/spectrum-css/commit/0acd811f6173ca2a24ba5e62af2fdc776dd41048) Thanks [@cdransf](https://github.com/cdransf)!

- Addresses issue where a portion of search clear button sat outside of its parent by moving the transform applied to the button to the child icon.

## 7.1.4

### Patch Changes

📝 [#3107](https://github.com/adobe/spectrum-css/pull/3107) [`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2) Thanks [@castastrophe](https://github.com/castastrophe)!

- Incorporate glob export for the dist directory in all component packages as well as glob markdown exports (to include both CHANGELOG and READMEs).

  Sort keys in the package.json assets.

- Updated dependencies [[`83d5a17`](https://github.com/adobe/spectrum-css/commit/83d5a171bd850df693707611203ecce21f22e7d2)]:
  - @spectrum-css/clearbutton@6.1.3
  - @spectrum-css/textfield@7.2.3
  - @spectrum-css/icon@7.1.4

## 7.1.3

### Patch Changes

📝 [#3045](https://github.com/adobe/spectrum-css/pull/3045) [`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277) Thanks [@castastrophe](https://github.com/castastrophe)!

- Improve changeset suggestions by using exports instead of files in component packages

- Updated dependencies [[`5d6e03f`](https://github.com/adobe/spectrum-css/commit/5d6e03f30891f9171f1a600b06d534ee85719277)]:
  - @spectrum-css/clearbutton@6.1.2
  - @spectrum-css/textfield@7.2.1
  - @spectrum-css/icon@7.1.3

## 7.1.2

### Patch Changes

📝 [#2677](https://github.com/adobe/spectrum-css/pull/2677) [`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855) Thanks [@castastrophe](https://github.com/castastrophe)!

- Leveral local workspace versioning to prevent misalignment

- Updated dependencies [[`d83200c`](https://github.com/adobe/spectrum-css/commit/d83200ca70a959aa70329e71de0c4383de157855)]:
  - @spectrum-css/clearbutton@6.1.1
  - @spectrum-css/textfield@7.1.3
  - @spectrum-css/icon@7.1.1

## 7.1.1

### Patch Changes

📝 [#2759](https://github.com/adobe/spectrum-css/pull/2759) [`9652981`](https://github.com/adobe/spectrum-css/commit/965298128a39ec40543f659480559053b33394e2) Thanks [@castastrophe](https://github.com/castastrophe)!

- fix: when whitespace normalization is done before stylelint fixes, a few selector optimizations were uncovered.

## 7.1.0

### Minor Changes

📝 [#2616](https://github.com/adobe/spectrum-css/pull/2616) [`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d) Thanks [@castastrophe](https://github.com/castastrophe)!

#### Build optmizations to support minification

Output for all component CSS files is now being run through a lightweight optimizer (cssnano) which significantly reduces unnecessary whitespace. These changes reduce file size but should not have any impact on the rendering of the component. By removing unnecessary whitespace from var functions, we are making it easier to effectively minify our provided CSS assets.

### Patch Changes

- Updated peerDependencies [[`7f45ea9`](https://github.com/adobe/spectrum-css/commit/7f45ea95d3d31addf29b0720de8623b0f3f0431d)]:
  - @spectrum-css/clearbutton@>=6
  - @spectrum-css/icon@>=7
  - @spectrum-css/textfield@>=7
  - @spectrum-css/tokens@>=14

## 7.0.0

🗓 2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.2.4...@spectrum-css/search@7.0.0)

- feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

### 🛑 BREAKING CHANGE

- Removes component-builder & component-builder-simple for script leveraging postcss
- Imports added to index.css and themes/express.css

## 6.2.4

🗓 2024-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.2.3...@spectrum-css/search@6.2.4)

**Note:** Version bump only for package @spectrum-css/search

## 6.2.3

🗓 2024-02-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.2.2...@spectrum-css/search@6.2.3)

**Note:** Version bump only for package @spectrum-css/search

## 6.2.2

🗓 2024-02-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.2.1...@spectrum-css/search@6.2.2)

**Note:** Version bump only for package @spectrum-css/search

## 6.2.1

🗓 2024-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.2.0...@spectrum-css/search@6.2.1)

**Note:** Version bump only for package @spectrum-css/search

## 6.2.0

🗓 2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.1.0...@spectrum-css/search@6.2.0)

**Note:** Version bump only for package @spectrum-css/search

## 6.1.0

🗓 2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.30...@spectrum-css/search@6.1.0)

### ✨ Features

- remove theme files without content([1eadd4f](https://github.com/adobe/spectrum-css/commit/1eadd4f))

## 6.0.30

🗓 2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.29...@spectrum-css/search@6.0.30)

**Note:** Version bump only for package @spectrum-css/search

## 6.0.29

🗓 2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.28...@spectrum-css/search@6.0.29)

**Note:** Version bump only for package @spectrum-css/search

## 6.0.28

🗓 2023 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.27...@spectrum-css/search@6.0.28)

**Note:** Version bump only for package @spectrum-css/search

## 6.0.27

🗓 2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.26...@spectrum-css/search@6.0.27)

**Note:** Version bump only for package @spectrum-css/search

## 6.0.26

🗓 2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.25...@spectrum-css/search@6.0.26)

**Note:** Version bump only for package @spectrum-css/search

## 6.0.25

🗓 2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.24...@spectrum-css/search@6.0.25)

**Note:** Version bump only for package @spectrum-css/search

## 6.0.24

🗓 2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.23...@spectrum-css/search@6.0.24)

**Note:** Version bump only for package @spectrum-css/search

## 6.0.23

🗓 2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.22...@spectrum-css/search@6.0.23)

**Note:** Version bump only for package @spectrum-css/search

## 6.0.22

🗓 2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.21...@spectrum-css/search@6.0.22)

**Note:** Version bump only for package @spectrum-css/search

## 6.0.21

🗓 2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.20...@spectrum-css/search@6.0.21)

**Note:** Version bump only for package @spectrum-css/search

## 6.0.20

🗓 2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.19...@spectrum-css/search@6.0.20)

**Note:** Version bump only for package @spectrum-css/search

## 6.0.19

🗓 2023 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.18...@spectrum-css/search@6.0.19)

**Note:** Version bump only for package @spectrum-css/search

## 6.0.18

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.17...@spectrum-css/search@6.0.18)

**Note:** Version bump only for package @spectrum-css/search

## 6.0.17

🗓 2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.16...@spectrum-css/search@6.0.17)

## 6.0.16

🗓 2023-08-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.15...@spectrum-css/search@6.0.16)

### 🔙 Reverts

- gulp and build updates ([#2121](https://github.com/adobe/spectrum-css/issues/2121))([03a37f5](https://github.com/adobe/spectrum-css/commit/03a37f5)), closes[#2099](https://github.com/adobe/spectrum-css/issues/2099)

## 6.0.15

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.14...@spectrum-css/search@6.0.15)

## 6.0.14

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.12...@spectrum-css/search@6.0.14)

**Note:** Version bump only for package @spectrum-css/search

## 6.0.13

🗓 2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.12...@spectrum-css/search@6.0.13)

**Note:** Version bump only for package @spectrum-css/search

## 6.0.12

🗓 2023-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.11...@spectrum-css/search@6.0.12)

**Note:** Version bump only for package @spectrum-css/search

## 6.0.11

🗓 2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.10...@spectrum-css/search@6.0.11)

**Note:** Version bump only for package @spectrum-css/search

## 6.0.10

🗓 2023 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.9...@spectrum-css/search@6.0.10)

**Note:** Version bump only for package @spectrum-css/search

## 6.0.9

🗓 2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.8...@spectrum-css/search@6.0.9)

**Note:** Version bump only for package @spectrum-css/search

## 6.0.8

🗓 2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.7...@spectrum-css/search@6.0.8)

## 6.0.7

🗓 2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.6...@spectrum-css/search@6.0.7)

**Note:** Version bump only for package @spectrum-css/search

## 6.0.6

🗓 2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.5...@spectrum-css/search@6.0.6)

**Note:** Version bump only for package @spectrum-css/search

## 6.0.5

🗓 2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.4...@spectrum-css/search@6.0.5)

**Note:** Version bump only for package @spectrum-css/search

## 6.0.4

🗓 2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.3...@spectrum-css/search@6.0.4)

**Note:** Version bump only for package @spectrum-css/search

## 6.0.3

🗓 2023-06-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.2...@spectrum-css/search@6.0.3)

**Note:** Version bump only for package @spectrum-css/search

## 6.0.2

🗓 2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.1...@spectrum-css/search@6.0.2)

**Note:** Version bump only for package @spectrum-css/search

## 6.0.1

🗓 2023 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@6.0.0...@spectrum-css/search@6.0.1)

**Note:** Version bump only for package @spectrum-css/search

## 6.0.0

🗓 2023-06-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.23...@spectrum-css/search@6.0.0)

- chore(search)!: core tokens migration (#1761)([b54d8ef](https://github.com/adobe/spectrum-css/commit/b54d8ef)), closes[#1761](https://github.com/adobe/spectrum-css/issues/1761)

### 🛑 BREAKING CHANGE

- migrates Search to use `@adobe/spectrum-tokens`

## 5.0.23

🗓 2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.22...@spectrum-css/search@5.0.23)

**Note:** Version bump only for package @spectrum-css/search

## 5.0.22

🗓 2023-05-30 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.21...@spectrum-css/search@5.0.22)

**Note:** Version bump only for package @spectrum-css/search

## 5.0.21

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.20...@spectrum-css/search@5.0.21)

**Note:** Version bump only for package @spectrum-css/search

## 5.0.20

🗓 2023 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.19...@spectrum-css/search@5.0.20)

**Note:** Version bump only for package @spectrum-css/search

## 5.0.19

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.18...@spectrum-css/search@5.0.19)

**Note:** Version bump only for package @spectrum-css/search

## 5.0.18

🗓 2023-05-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.17...@spectrum-css/search@5.0.18)

**Note:** Version bump only for package @spectrum-css/search

## 5.0.17

🗓 2023-05-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.16...@spectrum-css/search@5.0.17)

**Note:** Version bump only for package @spectrum-css/search

## 5.0.16

🗓 2023-05-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.15...@spectrum-css/search@5.0.16)

**Note:** Version bump only for package @spectrum-css/search

## 5.0.15

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.14...@spectrum-css/search@5.0.15)

**Note:** Version bump only for package @spectrum-css/search

## 5.0.14

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.13...@spectrum-css/search@5.0.14)

**Note:** Version bump only for package @spectrum-css/search

## 5.0.13

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.12...@spectrum-css/search@5.0.13)

**Note:** Version bump only for package @spectrum-css/search

## 5.0.12

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.11...@spectrum-css/search@5.0.12)

**Note:** Version bump only for package @spectrum-css/search

## 5.0.11

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.10...@spectrum-css/search@5.0.11)

**Note:** Version bump only for package @spectrum-css/search

## 5.0.10

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.9...@spectrum-css/search@5.0.10)

**Note:** Version bump only for package @spectrum-css/search

## 5.0.9

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.7...@spectrum-css/search@5.0.9)

**Note:** Version bump only for package @spectrum-css/search

## 5.0.8

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.7...@spectrum-css/search@5.0.8)

**Note:** Version bump only for package @spectrum-css/search

## 5.0.7

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.6...@spectrum-css/search@5.0.7)

**Note:** Version bump only for package @spectrum-css/search

## 5.0.6

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.5...@spectrum-css/search@5.0.6)

**Note:** Version bump only for package @spectrum-css/search

## 5.0.5

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.4...@spectrum-css/search@5.0.5)

**Note:** Version bump only for package @spectrum-css/search

## 5.0.4

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.3...@spectrum-css/search@5.0.4)

**Note:** Version bump only for package @spectrum-css/search

## 5.0.3

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.2...@spectrum-css/search@5.0.3)

**Note:** Version bump only for package @spectrum-css/search

## 5.0.2

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.0...@spectrum-css/search@5.0.2)

**Note:** Version bump only for package @spectrum-css/search

## 5.0.1

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@5.0.0...@spectrum-css/search@5.0.1)

**Note:** Version bump only for package @spectrum-css/search

## 5.0.0

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.25...@spectrum-css/search@5.0.0)

- fix(tokens)!: rgb transform to split out rgb values from css attributes (#1590) ([b714db4](https://github.com/adobe/spectrum-css/commit/b714db4)), closes [#1590](https://github.com/adobe/spectrum-css/issues/1590)

### 🛑 BREAKING CHANGE

- transforms color tokens to split out their `rgb` values

Co-authored-by: castastrophe <castastrophe@users.noreply.github.com>

## 4.2.25

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.24...@spectrum-css/search@4.2.25)

**Note:** Version bump only for package @spectrum-css/search

## 4.2.24

🗓 2023-03-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.23...@spectrum-css/search@4.2.24)

**Note:** Version bump only for package @spectrum-css/search

## 4.2.23

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.22...@spectrum-css/search@4.2.23)

**Note:** Version bump only for package @spectrum-css/search

## 4.2.22

🗓 2023-02-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.21...@spectrum-css/search@4.2.22)

**Note:** Version bump only for package @spectrum-css/search

## 4.2.21

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.20...@spectrum-css/search@4.2.21)

**Note:** Version bump only for package @spectrum-css/search

## 4.2.20

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.19...@spectrum-css/search@4.2.20)

**Note:** Version bump only for package @spectrum-css/search

## 4.2.19

🗓 2023-01-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.18...@spectrum-css/search@4.2.19)

**Note:** Version bump only for package @spectrum-css/search

## 4.2.18

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.17...@spectrum-css/search@4.2.18)

**Note:** Version bump only for package @spectrum-css/search

## 4.2.17

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.15...@spectrum-css/search@4.2.17)

**Note:** Version bump only for package @spectrum-css/search

## 4.2.16

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.15...@spectrum-css/search@4.2.16)

**Note:** Version bump only for package @spectrum-css/search

## 4.2.15

🗓 2022-12-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.14...@spectrum-css/search@4.2.15)

**Note:** Version bump only for package @spectrum-css/search

## 4.2.14

🗓 2022-11-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.13...@spectrum-css/search@4.2.14)

**Note:** Version bump only for package @spectrum-css/search

## 4.2.13

🗓 2022-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.12...@spectrum-css/search@4.2.13)

**Note:** Version bump only for package @spectrum-css/search

## 4.2.12

🗓 2022-06-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.11...@spectrum-css/search@4.2.12)

**Note:** Version bump only for package @spectrum-css/search

## 4.2.11

🗓 2022-06-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.10...@spectrum-css/search@4.2.11)

**Note:** Version bump only for package @spectrum-css/search

## 4.2.10

🗓 2022-05-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.9...@spectrum-css/search@4.2.10)

**Note:** Version bump only for package @spectrum-css/search

## 4.2.9

🗓 2022-04-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.8...@spectrum-css/search@4.2.9)

**Note:** Version bump only for package @spectrum-css/search

## 4.2.8

🗓 2022-04-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.7...@spectrum-css/search@4.2.8)

**Note:** Version bump only for package @spectrum-css/search

## 4.2.7

🗓 2022-03-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.6...@spectrum-css/search@4.2.7)

**Note:** Version bump only for package @spectrum-css/search

## 4.2.6

🗓 2022-03-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.5...@spectrum-css/search@4.2.6)

**Note:** Version bump only for package @spectrum-css/search

## 4.2.5

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.4...@spectrum-css/search@4.2.5)

**Note:** Version bump only for package @spectrum-css/search

## 4.2.4

🗓 2022-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.3...@spectrum-css/search@4.2.4)

**Note:** Version bump only for package @spectrum-css/search

## 4.2.3

🗓 2022-02-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.2...@spectrum-css/search@4.2.3)

**Note:** Version bump only for package @spectrum-css/search

## 4.2.2

🗓 2022-02-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.1...@spectrum-css/search@4.2.2)

**Note:** Version bump only for package @spectrum-css/search

## 4.2.1

🗓 2022-01-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.2.0...@spectrum-css/search@4.2.1)

**Note:** Version bump only for package @spectrum-css/search

## 4.2.0

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.0.1...@spectrum-css/search@4.2.0)

### ✨ Features

- break out ClearButton and LogicButton into their own packages ([3cc0a5f](https://github.com/adobe/spectrum-css/commit/3cc0a5f))

### 🐛 Bug fixes

- update peer dependencies ([97810cf](https://github.com/adobe/spectrum-css/commit/97810cf))

## 4.1.0

🗓 2022-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.0.1...@spectrum-css/search@4.1.0)

### ✨ Features

- break out ClearButton and LogicButton into their own packages ([a2092ab](https://github.com/adobe/spectrum-css/commit/a2092ab))

## 4.0.1

🗓 2021-12-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@4.0.0...@spectrum-css/search@4.0.1)

**Note:** Version bump only for package @spectrum-css/search

## 4.0.0

🗓 2021-11-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@3.1.2...@spectrum-css/search@4.0.0)

### ✨ Features

- make Search use tokens for its Textfield radius to support Express ([785b57f](https://github.com/adobe/spectrum-css/commit/785b57f))

### 🛑 BREAKING CHANGE

- a new classname is required to enable this. See migration guide

## 3.1.2

🗓 2021-11-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@3.1.1...@spectrum-css/search@3.1.2)

**Note:** Version bump only for package @spectrum-css/search

## 3.1.1

🗓 2021-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@3.1.0...@spectrum-css/search@3.1.1)

**Note:** Version bump only for package @spectrum-css/search

## 3.1.0

🗓 2021-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@3.0.4...@spectrum-css/search@3.1.0)

### ✨ Features

- make ClearButton build again, unblock CCX ([#1304](https://github.com/adobe/spectrum-css/issues/1304)) ([ae9399a](https://github.com/adobe/spectrum-css/commit/ae9399a))

## 3.0.5

🗓 2021-10-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@3.0.4...@spectrum-css/search@3.0.5)

**Note:** Version bump only for package @spectrum-css/search

## 3.0.3

🗓 2021-09-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@3.0.2...@spectrum-css/search@3.0.3)

### 🐛 Bug fixes

- updating version number on vars ([f535b49](https://github.com/adobe/spectrum-css/commit/f535b49))

## 3.0.2

🗓 2021-04-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@3.0.1...@spectrum-css/search@3.0.2)

**Note:** Version bump only for package @spectrum-css/search

## 3.0.1

🗓 2021-03-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@3.0.0...@spectrum-css/search@3.0.1)

**Note:** Version bump only for package @spectrum-css/search

## 3.0.0

🗓 2021-02-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@2.0.6...@spectrum-css/search@3.0.0)

**Note:** Version bump only for package @spectrum-css/search

## 2.0.6

🗓 2020-03-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@2.0.5...@spectrum-css/search@2.0.6)

**Note:** Version bump only for package @spectrum-css/search

## 2.0.5

🗓 2020-02-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@2.0.4...@spectrum-css/search@2.0.5)

### 🐛 Bug fixes

- color of disabled Search icon on hover/active/focus ([#483](https://github.com/adobe/spectrum-css/issues/483)) ([a928e3f](https://github.com/adobe/spectrum-css/commit/a928e3f))

## 2.0.4

🗓 2020-01-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@2.0.3...@spectrum-css/search@2.0.4)

**Note:** Version bump only for package @spectrum-css/search

## 2.0.3

🗓 2019-12-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@2.0.2...@spectrum-css/search@2.0.3)

### 🐛 Bug fixes

- correct Search icon color on hover/down/focus, fixes [#409](https://github.com/adobe/spectrum-css/issues/409) ([#429](https://github.com/adobe/spectrum-css/issues/429)) ([d63b887](https://github.com/adobe/spectrum-css/commit/d63b887))

## 2.0.2

🗓 2019-11-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@2.0.1...@spectrum-css/search@2.0.2)

**Note:** Version bump only for package @spectrum-css/search

## 2.0.1

🗓 2019-11-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/search@2.0.0...@spectrum-css/search@2.0.1)

**Note:** Version bump only for package @spectrum-css/search

## 2.0.0

🗓 2019-10-08

### ✨ Features

- move to individually versioned packages with Lerna ([#265](https://github.com/adobe/spectrum-css/issues/265)) ([cb7fd4b](https://github.com/adobe/spectrum-css/commit/cb7fd4b)), closes [#231](https://github.com/adobe/spectrum-css/issues/231) [#214](https://github.com/adobe/spectrum-css/issues/214) [#229](https://github.com/adobe/spectrum-css/issues/229) [#240](https://github.com/adobe/spectrum-css/issues/240) [#239](https://github.com/adobe/spectrum-css/issues/239) [#161](https://github.com/adobe/spectrum-css/issues/161) [#242](https://github.com/adobe/spectrum-css/issues/242) [#246](https://github.com/adobe/spectrum-css/issues/246) [#219](https://github.com/adobe/spectrum-css/issues/219) [#235](https://github.com/adobe/spectrum-css/issues/235) [#189](https://github.com/adobe/spectrum-css/issues/189) [#248](https://github.com/adobe/spectrum-css/issues/248) [#232](https://github.com/adobe/spectrum-css/issues/232) [#248](https://github.com/adobe/spectrum-css/issues/248) [#218](https://github.com/adobe/spectrum-css/issues/218) [#237](https://github.com/adobe/spectrum-css/issues/237) [#255](https://github.com/adobe/spectrum-css/issues/255) [#256](https://github.com/adobe/spectrum-css/issues/256) [#258](https://github.com/adobe/spectrum-css/issues/258) [#257](https://github.com/adobe/spectrum-css/issues/257) [#259](https://github.com/adobe/spectrum-css/issues/259)
