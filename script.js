const sounds=['applause','boo','gasp','tada','victory','wrong' ]


sounds.forEach(sound => {


  const btn =document.createElement('button')
  btn.classList.add('btn')
  btn.innerText = sound

 btn.addEventListener('click',() => {
  document.getElementById(sound).play()   


})

  document.getElementById('buttons').
  appendChild(btn)


})

function stopSong(){
    sounds.forEach(soound =>{
      const song= document.getElementById(sound)
       song.paus()
        song.currentTime=0;    })
      }
