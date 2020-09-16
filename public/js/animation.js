const banner = document.querySelector('#home');
const bannerText = document.querySelector('.text-content');
const heading = document.querySelector('#p-heading');

const tl = new TimelineMax();

tl.fromTo(heading,2,{color:'rgb(51,193,207)', fontSize:'150%'},{color:'rgb(51,193,207)'})
.fromTo(banner, 2, { padding:'100%'},{padding:'35vh 0 0 0'})
.from(bannerText,2, {padding:'100%'},'-=3')
// .from(heading,10,{transform:'rotateY(180deg)', transform:'rotateZ(-90deg)', color:'yellow'},'-=8')
.fromTo(heading,6,{color:'rgb(8,7,16)'},{color:'#fff', padding:'0%'},'-=3');
;
// fromTo(hero, 2, { height: "0%", opacity: '0' }, { height: "70%", opacity: "1", ease: Power2.easeInOut });
    