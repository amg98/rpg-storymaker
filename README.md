# RPG Story Maker
A desktop app to build RPG stories (maps, dialogues and battles) and test them out. A RPG story can be exported to a folder containing all maps, assets and dialogues so it is possible to build an engine to play that RPG game. This tool focuses on defining an RPG game in a productive way which does not involve coding.

## Issue tracking
Trello: https://trello.com/b/KwC2xI7m/rpg-story-maker

## Running the project
First, check out the tools install process in `INSTALL.md` file at the project root

Then, install dependencies using `yarn`, and run the project by running `yarn tauri:start`

## Building for production
- Bump the version number in `src-tauri/tauri.conf.json`
- Run `yarn tauri:build`. After the build process succeeds, you can look at `src-tauri/target/release/bundle` for build artifacts
