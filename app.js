$(() => {

// ======== LUKE SKYWALKER ==============
// create click event for luke skywalker button

    $('input[id="luke"]').on('click', (event) => {
          // console.log('i clicked it');

      $.ajax(
          {
            url: "https://swapi.co/api/people/1"
          }
      ).then(
        (data) => {
          // // check to see that API is set up
            console.log(data);
            // create luke skywalker
            const $luke = $('<h2>').text(data.name);
            $('.luke').append($luke);

            const $birthYear = $('<li>').text('Year of Birth: ' + data.birth_year);
            $('.luke').append($birthYear);

            const $gender = $('<li>').text('Gender: ' + data.gender);
            $('.luke').append($gender);

            const $height = $('<li>').text('Height: ' + data.height);
            $('.luke').append($height);

            const $mass = $('<li>').text('Mass: ' + data.mass);
            $('.luke').append($mass);

            const $eyeColor = $('<li>').text('Eye Color: ' + data.eye_color);
            $('.luke').append($eyeColor);

            const $hairColor = $('<li>').text('Hair Color: ' + data.hair_color);
            $('.luke').append($hairColor);

            const $skinColor = $('<li>').text('Skin Color: ' + data.skin_color);
            $('.luke').append($skinColor);

                $.ajax(
                    {
                      url:  data.homeworld
                    }
                  ).then (

                      (data) => {
                        // console.log(data);
                        const $homeworld = $('<li>').text('Homeworld: ' + data.name);
                        $('.luke').append($homeworld);
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
                          $('.luke').append($species);
                        }
                      )



            // turn off button
            $(event.target).off();
        },
        () => {
            console.log('bad request');
        }
      )

// ======== R2D2 ==============

// create click event for R2D2 button
    })
      $('input[id="r2d2"]').on('click', (event) => {
        $.ajax(
            {
              url: "https://swapi.co/api/people/3"
            }
        ).then (
            (data) => {
              console.log(data);
              const $r2d2 = $('<h2>').text(data.name);
              $('.r2d2').append($r2d2);

              const $birthYear = $('<li>').text('Year of Birth: ' + data.birth_year);
              $('.r2d2').append($birthYear);

              const $eyeColor = $('<li>').text('Eye Color: ' + data.eye_color);
              $('.r2d2').append($eyeColor);

              const $height = $('<li>').text('Height: ' + data.height);
              $('.r2d2').append($height);

              const $mass = $('<li>').text('Mass: ' + data.mass);
              $('.r2d2').append($mass);

              const $skinColor = $('<li>').text('Skin Color: ' + data.skin_color);
              $('.r2d2').append($skinColor);

                $.ajax(
                    {
                      url:  data.homeworld
                    }
                  ).then (

                      (data) => {
                        // console.log(data);
                        const $homeworld = $('<li>').text('Homeworld: ' + data.name);
                        $('.r2d2').append($homeworld);
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
                          $('.r2d2').append($species);
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
            },
            () => {
                console.log('bad request');
            }
      )

      })

// ======== C3PO ==============

// create click event for C3PO button

      $('input[id="c3po"]').on('click', (event) => {
        $.ajax(
            {
              url: "https://swapi.co/api/people/2"
            }
        ).then (
            (data) => {
              console.log(data);
              const $c3po = $('<h2>').text(data.name);
              $('.c3po').append($c3po);

              const $birthYear = $('<li>').text('Year of Birth: ' + data.birth_year);
              $('.c3po').append($birthYear);

              const $eyeColor = $('<li>').text('Eye Color: ' + data.eye_color);
              $('.c3po').append($eyeColor);

              const $height = $('<li>').text('Height: ' + data.height);
              $('.c3po').append($height);

              const $mass = $('<li>').text('Mass: ' + data.mass);
              $('.c3po').append($mass);

              const $skinColor = $('<li>').text('Skin Color: ' + data.skin_color);
              $('.c3po').append($skinColor);

                $.ajax(
                    {
                      url:  data.homeworld
                    }
                  ).then (

                      (data) => {
                        // console.log(data);
                        const $homeworld = $('<li>').text('Homeworld: ' + data.name);
                        $('.c3po').append($homeworld);
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
                          $('.c3po').append($species);
                        }
                      )


            },
            () => {
                console.log('bad request');
            }
      )

      })


// === closes jquery
});
