<script>
    import "../app.css"
    import "../component/TextArea.svelte"
    import '../component/ButtonLoading.svelte'
  import ButtonLoading from "../component/ButtonLoading.svelte";
  import TextArea from "../component/TextArea.svelte";
</script>

<main class=" container max-w-lg m-auto flex flex-col">
  <h1 class="font-mono text-lg mb-5 mt-5 min-h-full">FIX YOUR SENTENCE HERE!</h1>
  <TextArea />
  <ButtonLoading />
</main>



