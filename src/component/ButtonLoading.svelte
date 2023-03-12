<script>
  import {fixSentence} from '../services/ia'
  import IconsLoading from "./IconsLoading.svelte";
  let promise = null
  let badWord = ''
  let correctlyWord = ''


  const handleClick = async () =>{
    const text = document.getElementById('result').value

    promise = fixSentence(text)

    const value = await promise

    correctlyWord = value.split(' ')
    badWord = text.split(' ')

    correctlyWord.forEach((word, index) => {
      if(word !== badWord[index]){
        console.log(word)
      }
    });
    document.getElementById('result').value = value
    promise = null
  }

</script>

{#if promise === null}
  
  <button on:click={handleClick} type="button" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
    Valider
  </button>

{:else}
  {#await promise}
    <button   type="button" class=" pointer-event-none  py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
      <IconsLoading />
      loading
    </button>
  {/await}

{/if}


