<script>
    let year = new Date().getFullYear()
    let email = "kevin.lingk@proton.me"
    let github = "https://github.com/kvnlnk"
    let linkedIn = ""
</script>

<div class="flex flex-col items-center gap-y-6 py-4">
    <div class="flex flex-row gap-4">
        <a href="mailto:{ email }">E-Mail</a>
        <a href={github}>GitHub</a>
        <a href={linkedIn}>LinkedIn</a>
    </div>
    <div>
        <p class="text-center text-sm">
            &copy; {year} kvnlnk. Created with lots of coffee.
        </p>
    </div>
</div>