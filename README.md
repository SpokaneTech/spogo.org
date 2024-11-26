# spokane-go-docs

Vitepress documentation repository for the Spokane Go User Group. This is hosted on Gitlab Pages and auto-deployes on push to the `main` branch. It is visible at [https://spogo.org](https://spogo.org).

## Notes

- When adding new pages, please try to keep a consistent structure. For example, all meetups should be in the `docs/meetups` directory and named with the date in the format `YYYY-MM-DD.md`.
- At the moment, left navigation is generated based on file names. Root files in a directory should be named index.md if they are to be used as a landing page for that directory.
- Names for markdown files and directories should always be all lower case.
- Vitepress supports some handy markdown extensions to make things pretty. See the [Vitepress Docs](https://vitepress.dev/guide/markdown) for more information.
