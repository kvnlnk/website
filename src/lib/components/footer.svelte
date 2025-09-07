<script>
    let year = new Date().getFullYear()
    let email = "kevin.lingk@proton.me"
    let github = "https://github.com/kvnlnk"
    let linkedIn = "https://www.linkedin.com/in/kevin-lingk-471595360"
</script>

<div class="flex flex-col items-center gap-y-6 py-4">
    <div class="flex flex-row gap-4">
        <a target="_blank" href="mailto:{ email }" class="transition-colors hover:text-success-500">E-Mail</a>
        <a target="_blank" href={github} class="transition-colors hover:text-success-500">GitHub</a>
        <a target="_blank" href={linkedIn} class="transition-colors hover:text-success-500">LinkedIn</a>
    </div>
    <div>
        <p class="text-center text-sm">
            &copy; {year} kvnlnk. Created with lots of coffee.
        </p>
    </div>
</div>