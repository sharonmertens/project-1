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
            const $birthYear = $('<li>').text('year of birth: ' + data.birth_year);
            $('.luke').append($birthYear);
            const $gender = $('<li>').text(data.gender);
            $('.luke').append($gender);

                $.ajax(
                    {
                      url:  data.homeworld
                    }
                  ).then (

                      (data) => {
                        console.log(data);
                        const $homeworld = $('<li>').text(data.name);
                        $('.luke').append($homeworld);
                      }
                    )

            const $height = $('<li>').text(data.height);
            $('.luke').append($height);
            const $mass = $('<li>').text(data.mass);
            $('.luke').append($mass);
            const $eyeColor = $('<li>').text(data.eye_color);
            $('.luke').append($eyeColor);
            const $hairColor = $('<li>').text(data.hair_color);
            $('.luke').append($hairColor);
            const $skinColor = $('<li>').text(data.skin_color);
            $('.luke').append($skinColor);
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
              // console.log(data);

            },
            () => {
                console.log('bad request');
            }
      )

      })


// === closes jquery
});
