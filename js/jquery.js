$(document).ready(function () {
  console.log("we are using jquery");
  // $("selector").action();
  //   $("p").click();
  //   $("p").click(function () {
  //     console.log("you clicked on p", this);
  //     //   $('p').hide();
  //   $(this).hide();
  //   });
  $("p").dblclick(function () {
    console.log("you doubl clicked on p", this);
    //   $('p').hide();
    //   $(this).hide();
  });
  //   $("p").mouseenter(function () {
  //     console.log("mouseenter on p", this);
  //     //   $('p').hide();
  //     //   $(this).hide();
  //   });
  //   $("p").mousedown(function () {
  //     console.log("mousedown on p", this);
  //     //   $('p').hide();
  //     //   $(this).hide();
  //   });
  // $("p").mouseleave(function () {
  //     console.log("mouseleave on p", this);
  //     //   $('p').hide();
  //     //   $(this).hide();
  //   });
  // $("p").mousemove(function () {
  //     console.log("mousemove on p", this);
  //     //   $('p').hide();
  //     //   $(this).hide();
  //   });
  // $("p").mouseup(function () {
  //     console.log("mouseup on p", this);
  //     //   $('p').hide();
  //     //   $(this).hide();
  //   });
  //   $("p").hover(function () {
  //     console.log("hover  on p", this);
  //     //   $('p').hide();
  //     //   $(this).hide();
  //   });
  //   $('p').click()
  //   $("#second").click()
  //   $(".odd").click()

  // $('*').click()
  // $('p.odd').click()
  // $('p:first').click()
  console.log("i am in new file now");

  $("p").on({
    click: function () {
      console.log("Thanks for clicking", this);
    },
    mouseleave: function () {
      // console.log("mouseleave in ")
    },
  });

  // $('#stock').hide(2000,function(){
  //     console.log('hidden')
  // })
  // $('#stock').show(2000,function(){
  //     console.log('show')
  // })

  // $('#vs').click(function(){
  //     $('#stock').fadeToggle(4000)
  // })
  // $('#stock').slideToggle(2000)
  // $("#vs").click(function () {
  //   $("#stock").slideToggle(4000);
    // slideup
    // slidedown
  // });


// $("#stock").animate({
//   opacity:0.3,
//   height:'150px',
//   width:'350px'
// },'slow')
// $('#vs').click(function(){
//       $('#stock').fadeToggle(4000)
//   })
// $('#stock').animate({opacity:0.3},4000)
// $('#stock').animate({opacity:0.9},4000)
// $('#stock').animate({width:"350px"},12000)






























});
