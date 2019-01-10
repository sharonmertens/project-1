$(() => {

// ======== LUKE SKYWALKER ==============
// create click event for luke skywalker button

  $('input[id="luke"]').on('click', (event) => {
      console.log('checking');
      console.log($(event.currentTarget).parent().children().length);
      if ($(event.currentTarget).parent().children().length === 3) {
        $.ajax(
            {
              url: "https://swapi.co/api/people/1"
            }
        ).then(
          (data) => {
            // // check to see that API is set up
              console.log('i clicked it');
              console.log(data);
              // create luke skywalker
              const $div = $('<div>')
              $('.luke').append($div);

              const $luke = $('<h2>').text(data.name);
              $div.append($luke);

              const $birthYear = $('<li>').text('Year of Birth: ' + data.birth_year);
              $div.append($birthYear);

              const $gender = $('<li>').text('Gender: ' + data.gender);
              $div.append($gender);

              const $height = $('<li>').text('Height: ' + data.height);
              $div.append($height);

              const $mass = $('<li>').text('Mass: ' + data.mass);
              $div.append($mass);

              const $eyeColor = $('<li>').text('Eye Color: ' + data.eye_color);
              $div.append($eyeColor);

              const $hairColor = $('<li>').text('Hair Color: ' + data.hair_color);
              $div.append($hairColor);

              const $skinColor = $('<li>').text('Skin Color: ' + data.skin_color);
              $div.append($skinColor);

                  $.ajax(
                      {
                        url:  data.species
                      }
                    ).then (

                        (data) => {
                          // console.log(data);
                          const $species = $('<li>').text('Species: ' + data.name);
                          $div.append($species);
                        }
                      )

                    $.ajax(
                        {
                          url:  data.homeworld
                        }
                      ).then (

                          (data) => {
                            // console.log(data);
                            const $homeworld = $('<li>').text('Homeworld: ' + data.name);
                            $div.append($homeworld);
                          }
                        )


              // turn off button
              // $(event.target).off();
          },
          () => {
              console.log('bad request');
          }
        )
      } else {
        $(event.currentTarget).parent().children().eq(3).remove();
      }

})
// ======== R2D2 ==============
// create click event for R2D2 button

  $('input[id="r2d2"]').on('click', (event) => {
    if ($(event.currentTarget).parent().children().length === 3) {
      $.ajax(
          {
            url: "https://swapi.co/api/people/3"
          }
      ).then (
          (data) => {
            console.log(data);
            const $div2 = $('<div>');
            $('.r2d2').append($div2);

            const $r2d2 = $('<h2>').text(data.name);
            $div2.append($r2d2);

            const $birthYear = $('<li>').text('Year of Birth: ' + data.birth_year);
            $div2.append($birthYear);

            const $eyeColor = $('<li>').text('Eye Color: ' + data.eye_color);
            $div2.append($eyeColor);

            const $height = $('<li>').text('Height: ' + data.height);
            $div2.append($height);

            const $mass = $('<li>').text('Mass: ' + data.mass);
            $div2.append($mass);

            const $skinColor = $('<li>').text('Skin Color: ' + data.skin_color);
            $div2.append($skinColor);

              $.ajax(
                  {
                    url:  data.homeworld
                  }
                ).then (

                    (data) => {
                      // console.log(data);
                      const $homeworld = $('<li>').text('Homeworld: ' + data.name);
                      $div2.append($homeworld);
                    }
                  )

                $.ajax(
                    {
                      url:  data.species
                    }
                  ).then (

                      (data) => {
                        // console.log(data);
                        const $species = $('<li>').text('Species: ' + data.name);
                        $div2.append($species);
                      }
                    )

                // $.ajax(
                //     {
                //       url:  data.starships
                //     }
                //   ).then (
                //
                //       (data) => {
                //         console.log(data);
                //         const $starships = $('<li>').text('Starships: ' + data.name);
                //         $('.r2d2').append($starships);
                //       }
                //     )
                // turn off button
                // $(event.target).off();
          },
          () => {
              console.log('bad request');
          }
          )
        } else {
          $(event.currentTarget).parent().children().eq(3).remove();
        }

      })

// ======== C3PO ==============
// create click event for C3PO button

      $('input[id="c3po"]').on('click', (event) => {
        if ($(event.currentTarget).parent().children().length === 3) {
          $.ajax(
              {
                url: "https://swapi.co/api/people/2"
              }
          ).then (
              (data) => {
                console.log(data);
                // creating new div to append all the conent into
                const $div3 = $('<div>')
                $('.c3po').append($div3);

                const $c3po = $('<h2>').text(data.name);
                $div3.append($c3po);

                const $birthYear = $('<li>').text('Year of Birth: ' + data.birth_year);
                $div3.append($birthYear);

                const $eyeColor = $('<li>').text('Eye Color: ' + data.eye_color);
                $div3.append($eyeColor);

                const $height = $('<li>').text('Height: ' + data.height);
                $div3.append($height);

                const $mass = $('<li>').text('Mass: ' + data.mass);
                $div3.append($mass);

                const $skinColor = $('<li>').text('Skin Color: ' + data.skin_color);
                $div3.append($skinColor);

                  $.ajax(
                      {
                        url:  data.homeworld
                      }
                    ).then (

                        (data) => {
                          // console.log(data);
                          const $homeworld = $('<li>').text('Homeworld: ' + data.name);
                          $div3.append($homeworld);
                        }
                      )

                    $.ajax(
                        {
                          url:  data.species
                        }
                      ).then (

                          (data) => {
                            // console.log(data);
                            const $species = $('<li>').text('Species: ' + data.name);
                            $div3.append($species);
                          }
                        )

              // turn off button
              // $(event.target).off();

              },
              () => {
                  console.log('bad request');
              }
        )
      } else {
        $(event.currentTarget).parent().children().eq(3).remove();
      }

      })

// ======== DARTH VADER ==============
// create click event for Darth Vader button

    $('input[id="darth"]').on('click', (event) => {
      if ($(event.currentTarget).parent().children().length === 3 ) {
        $.ajax(
            {
              url: "https://swapi.co/api/people/4"
            }
        ).then (
            (data) => {
              console.log(data);

              const $div4 = $('<div>');
              $('.darth').append($div4);

              const $darth = $('<h2>').text(data.name);
              $div4.append($darth);

              const $birthYear = $('<li>').text('Year of Birth: ' + data.birth_year);
              $div4.append($birthYear);

              const $gender = $('<li>').text('Gender: ' + data.gender);
              $div4.append($gender);

              const $height = $('<li>').text('Height: ' + data.height);
              $div4.append($height);

              const $mass = $('<li>').text('Mass: ' + data.mass);
              $div4.append($mass);

              const $eyeColor = $('<li>').text('Eye Color: ' + data.eye_color);
              $div4.append($eyeColor);

              const $hairColor = $('<li>').text('Hair Color: ' + data.hair_color);
              $div4.append($hairColor);

              const $skinColor = $('<li>').text('Skin Color: ' + data.skin_color);
              $div4.append($skinColor);

                $.ajax(
                    {
                      url:  data.homeworld
                    }
                  ).then (

                      (data) => {
                        // console.log(data);
                        const $homeworld = $('<li>').text('Homeworld: ' + data.name);
                        $div4.append($homeworld);
                      }
                    )

              $.ajax(
                          {
                    url:  data.species
                    }
                  ).then (

                        (data) => {
                          // console.log(data);
                          const $species = $('<li>').text('Species: ' + data.name);
                          $div4.append($species);
                        }
                      )

            // turn off button
            // $(event.target).off();

            },
            () => {
                console.log('bad request');
            }
          )
      } else {
        $(event.currentTarget).parent().children().eq(3).remove();
      }


    })
// ======== PRINCESS LEIA ==============
// create click event for Princess Leia button

    $('input[id="leia"]').on('click', (event) => {
        $.ajax(
            {
              url: "https://swapi.co/api/people/5"
            }
        ).then (
            (data) => {
              console.log(data);
              const $leia = $('<h2>').text(data.name);
              $('.leia').append($leia);

              const $birthYear = $('<li>').text('Year of Birth: ' + data.birth_year);
              $('.leia').append($birthYear);

              const $gender = $('<li>').text('Gender: ' + data.gender);
              $('.leia').append($gender);

              const $height = $('<li>').text('Height: ' + data.height);
              $('.leia').append($height);

              const $mass = $('<li>').text('Mass: ' + data.mass);
              $('.leia').append($mass);

              const $eyeColor = $('<li>').text('Eye Color: ' + data.eye_color);
              $('.leia').append($eyeColor);

              const $hairColor = $('<li>').text('Hair Color: ' + data.hair_color);
              $('.leia').append($hairColor);

              const $skinColor = $('<li>').text('Skin Color: ' + data.skin_color);
              $('.leia').append($skinColor);

                $.ajax(
                    {
                      url:  data.homeworld
                    }
                  ).then (

                      (data) => {
                        // console.log(data);
                        const $homeworld = $('<li>').text('Homeworld: ' + data.name);
                        $('.leia').append($homeworld);
                      }
                    )

                $.ajax(
                      {
                        url:  data.species
                      }
                    ).then (

                        (data) => {
                          // console.log(data);
                          const $species = $('<li>').text('Species: ' + data.name);
                          $('.leia').append($species);
                        }
                      )

            // turn off button
            $(event.target).off();
            },
            () => {
                console.log('bad request');
            }
          )

        })

// ======== HAN SOLO ==============
// create click event for Han Solo button

    $('input[id="han"]').on('click', (event) => {
      $.ajax(
        {
          url: "https://swapi.co/api/people/14"
        }
      ).then (
        (data) => {
          console.log(data);
          const $han = $('<h2>').text(data.name);
          $('.han').append($han);

          const $birthYear = $('<li>').text('Year of Birth: ' + data.birth_year);
          $('.han').append($birthYear);

          const $gender = $('<li>').text('Gender: ' + data.gender);
          $('.han').append($gender);

          const $height = $('<li>').text('Height: ' + data.height);
          $('.han').append($height);

          const $mass = $('<li>').text('Mass: ' + data.mass);
          $('.han').append($mass);

          const $eyeColor = $('<li>').text('Eye Color: ' + data.eye_color);
          $('.han').append($eyeColor);

          const $hairColor = $('<li>').text('Hair Color: ' + data.hair_color);
          $('.han').append($hairColor);

          const $skinColor = $('<li>').text('Skin Color: ' + data.skin_color);
          $('.han').append($skinColor);

              $.ajax(
                {
                  url: data.homeworld
                }
              ).then(
                (data) => {
                  // console.log(data);
                  const $homeworld = $('<li>').text('Homeworld: ' + data.name);
                  $('.han').append($homeworld);
                }
              )

              $.ajax(
                    {
                      url:  data.species
                    }
                  ).then (

                      (data) => {
                        // console.log(data);
                        const $species = $('<li>').text('Species: ' + data.name);
                        $('.han').append($species);
                      }
                    )

          // turn off button
          $(event.target).off();
          },
          () => {
              console.log('bad request');
      })
    });

// ======== CHEWBACCA ==============
// create click event for Chewbacca button

    $('input[id="chewie"]').on('click', (event) => {
      $.ajax(
        {
          url: "https://swapi.co/api/people/13"
        }
      ).then (
        (data) => {
          console.log(data);
          const $chewie = $('<h2>').text(data.name);
          $('.chewie').append($chewie);

          const $birthYear = $('<li>').text('Year of Birth: ' + data.birth_year);
          $('.chewie').append($birthYear);

          const $gender = $('<li>').text('Gender: ' + data.gender);
          $('.chewie').append($gender);

          const $height = $('<li>').text('Height: ' + data.height);
          $('.chewie').append($height);

          const $mass = $('<li>').text('Mass: ' + data.mass);
          $('.chewie').append($mass);

          const $eyeColor = $('<li>').text('Eye Color: ' + data.eye_color);
          $('.chewie').append($eyeColor);

          const $hairColor = $('<li>').text('Hair Color: ' + data.hair_color);
          $('.chewie').append($hairColor);

          // const $skinColor = $('<li>').text('Skin Color: ' + data.skin_color);
          // $('.chewie')).append($skinColor);

              $.ajax(
                {
                  url: data.homeworld
                }
              ).then(
                (data) => {
                  // console.log(data);
                  const $homeworld = $('<li>').text('Homeworld: ' + data.name);
                  $('.chewie').append($homeworld);
                }
              )

              $.ajax(
                    {
                      url:  data.species
                    }
                  ).then (

                      (data) => {
                        // console.log(data);
                        const $species = $('<li>').text('Species: ' + data.name);
                        $('.chewie').append($species);
                      }
                    )

          // turn off button
          $(event.target).off();
          },
          () => {
              console.log('bad request');
      })
    });

// ======== OBI-WAN KENOBI ==============
// create click event for Obi-Wan Kenobi button


$('input[id="obi"]').on('click', (event) => {
  $.ajax(
    {
      url: "https://swapi.co/api/people/10"
    }
  ).then (
    (data) => {
      console.log(data);
      const $obi = $('<h2>').text(data.name);
      $('.obi').append($obi);

      const $birthYear = $('<li>').text('Year of Birth: ' + data.birth_year);
      $('.obi').append($birthYear);

      const $gender = $('<li>').text('Gender: ' + data.gender);
      $('.obi').append($gender);

      const $height = $('<li>').text('Height: ' + data.height);
      $('.obi').append($height);

      const $mass = $('<li>').text('Mass: ' + data.mass);
      $('.obi').append($mass);

      const $eyeColor = $('<li>').text('Eye Color: ' + data.eye_color);
      $('.obi').append($eyeColor);

      const $hairColor = $('<li>').text('Hair Color: ' + data.hair_color);
      $('.obi').append($hairColor);

      // const $skinColor = $('<li>').text('Skin Color: ' + data.skin_color);
      // $('.chewie')).append($skinColor);

          $.ajax(
            {
              url: data.homeworld
            }
          ).then(
            (data) => {
              // console.log(data);
              const $homeworld = $('<li>').text('Homeworld: ' + data.name);
              $('.obi').append($homeworld);
            }
          )

          $.ajax(
                {
                  url:  data.species
                }
              ).then (

                  (data) => {
                    // console.log(data);
                    const $species = $('<li>').text('Species: ' + data.name);
                    $('.obi').append($species);
                  }
                )

      // turn off button
      $(event.target).off();
      },
      () => {
          console.log('bad request');
  })
});

// ======== YODA ==============
// create click event for Yoda button

$('input[id="yoda"]').on('click', (event) => {
    $.ajax(
      {
        url: "https://swapi.co/api/people/20"
      }
    ).then (
      (data) => {
        console.log(data);
        const $yoda = $('<h2>').text(data.name);
        $('.yoda').append($yoda);

        const $birthYear = $('<li>').text('Year of Birth: ' + data.birth_year);
        $('.yoda').append($birthYear);

        const $gender = $('<li>').text('Gender: ' + data.gender);
        $('.yoda').append($gender);

        const $height = $('<li>').text('Height: ' + data.height);
        $('.yoda').append($height);

        const $mass = $('<li>').text('Mass: ' + data.mass);
        $('.yoda').append($mass);

        const $eyeColor = $('<li>').text('Eye Color: ' + data.eye_color);
        $('.yoda').append($eyeColor);

        const $hairColor = $('<li>').text('Hair Color: ' + data.hair_color);
        $('.yoda').append($hairColor);

        const $skinColor = $('<li>').text('Skin Color: ' + data.skin_color);
        $('.yoda').append($skinColor);

            // yoda's planet is unknown so I didnt want to include it
                // $.ajax(
                //   {
                //     url: "https://swapi.co/api/planets/28/"
                //   }
                // ).then(
                //   (data) => {
                //     console.log(data);
                //   }
                // )

                $.ajax(
                      {
                        url:  "https://swapi.co/api/species/6/"
                      }
                    ).then (

                        (data) => {
                          // console.log(data);
                          const $species = $('<li>').text('Species: ' + data.name);
                          $('.yoda').append($species);
                        }
                      )

      // data function end bracket
      }
    // then end brackets
    )
// input end brackets
})

// ========== CAROUSEL ===============

// image index counter
let currentImgIndex = 0;

// number of images in carousel
const numOfImages = $('.carousel-images').children().length - 1
// when we clickk on the next button -->
$('.next').on('click', () => {
  // we want the current image to hide
  $('.carousel-images').children().eq(currentImgIndex).hide()
  // if currentImgIndex is less than numOfImages
  if (currentImgIndex < numOfImages) {
    currentImgIndex ++ // we can keep incrementing
  } else {
    currentImgIndex = 0
  }
  // and next image to show
  $('.carousel-images').children().eq(currentImgIndex).show()
})

$('.previous').on('click', () => {
  // hide the current images
  $('.carousel-images').children().eq(currentImgIndex).hide()
  if (currentImgIndex > 0) {
    currentImgIndex --
  } else {
    currentImgIndex = numOfImages
  }

  // show current image
  $('.carousel-images').children().eq(currentImgIndex).show()
})


// === closes jquery
});
