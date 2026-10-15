<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the public link-in-bio experience at the index route, with lightweight local dialogs for profile details, project details, contact, notes, and sharing; these are content overlays, not separate navigation sections.
- Define visual styling and semantic colors in src/styles.css and use shadcn controls for interactions to keep the modular grid consistent.
- Treat the sample identity, contact, project, and social destinations as demonstration content; do not imply that generic social URLs are verified personal accounts.
