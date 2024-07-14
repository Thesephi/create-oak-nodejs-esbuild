## [1.3.0] - 2024-07-14

### Added

- template test script (`npm test`)
- support for `-y` (alternatively: `--yes`, `-f`, `--force`) flag (example: `npm create oak-bun -- -y`)

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
