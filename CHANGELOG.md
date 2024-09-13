## [1.5.0] - 2024-09-14

### Changed

- library upgrades (`@dklab/oak-routing-ctrl@^0.11.0`, `@oak/oak@^17.0.0`, `@types/node@^20.16.5`, `esbuild@^0.23.1`, `typescript@^5.6.2`)

## [1.4.2] - 2024-07-16

### Changed

- library upgrades (`@dklab/oak-routing-ctrl@^0.9.0`, `@types/node@^20.14.11`)

## [1.4.1] - 2024-07-14

### Changed

- minor improvements for the sample test spec file

## [1.4.0] - 2024-07-14

### Added

- template code to support OpenAPI Spec serving
- template test code to cover OpenAPI Spec serving

### Changed

- library upgrade (`@dklab/oak-routing-ctrl@^0.8.6`)

## [1.3.0] - 2024-07-14

### Added

- template test script (`npm test`)
- support for `-y` (alternatively: `--yes`, `-f`, `--force`) flag (example: `npm create oak-nodejs-esbuild -- -y`)

### Changed

- library upgrades (`@dklab/oak-routing-ctrl@^0.8.5`, `typescript@^5.5.3`, `esbuild@^0.23.0`, `@types/node@^20.14.10`)

## [1.2.1] - 2024-06-24

### Fixed

- existence guaranteed for `dist/bundle.js` in all cases

## [1.2.0] - 2024-06-24

### Fixed

- `npm run dev` behaves as expected

## [1.1.0] - 2024-06-23

### Fixed

- `.npmrc` and `.gitignore` files no longer ignored in scaffolds created from the published package
- `NO_COLOR` [spec respected](https://no-color.org/)
- no verbose error log when script is proactively cancelled by user

## [1.0.0] - 2024-06-23

### Added

- Initial Release
