if (typeof window.Steenify === 'undefined') {
  window.Steenify = {};
}
window.Steenify.home = {
  init__home: function() {
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      infinite: false,
      asNavFor: '.slider-nav',
      nextArrow:
        '<button type="button" class="slick-btn slick-next"><svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Path" d="M1 10L6 5.50901L1 1" stroke="#262F26" stroke-width="1.05" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
      prevArrow:
        '<button type="button" class="slick-btn slick-prev"><svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Path" d="M6 10L1 5.50901L6 1" stroke="#262F26" stroke-width="1.05" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    });

    $('.slider-nav').slick({
      slidesToShow: 5,
      slidesToScroll: 5,
      asNavFor: '.slider-for',
      dots: false,
      focusOnSelect: true,
      infinite: false,
    });

    $('[data-scroll-to]').on('click', function() {
      var self = $(this),
        id = self.data('scroll-to');

      if (id && $(id).length) {
        $('html, body')
          .stop()
          .animate({ scrollTop: $(id).offset().top }, 1500);
      }
    });

    this.init__countdown();
    this.init__form_order();
  },
  validate_phone: function(numer) {
    var phone_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    return phone_regex.test(numer);
  },

  init__countdown: function() {
    /*
	|-----------------------------------------------------
	|	CONTROL Countdown box display
	|-----------------------------------------------------
	*/
    // Make 'false' to hide (top-bottom).
    var display_till_years = false;
    var display_till_months = false;
    var display_till_days = true;
    var display_till_hours = true;
    var display_till_minutes = true;
    var display_till_seconds = true;

    // Hide Hour, Min, Sec boxes
    var hide_hr_min_sec = 'no'; // make 'yes' to hide Hour, Min, Sec boxes

    /*
	|-----------------------------------------------------
	|	Countdown JS
	|-----------------------------------------------------
	*/
    var userDate = new Date($('#count-down-date').val()).getTime();

    function countDown() {
      var frontYears = $('.years');
      var frontMonths = $('.months');
      var frontDays = $('.days');
      var frontHours = $('.hours');
      var frontminutes = $('.minutes');
      var frontSeconds = $('.seconds');
      var expiredText = $('.expired-text');
      var countDownUl = $('.count-down-list');

      var currentDate = new Date().getTime();
      var difference = userDate - currentDate;

      if (difference < 0) {
        clearInterval(countd);
        $(expiredText).removeClass('hidden');
        $(countDownUl).addClass('hidden');
      } else {
        // if all boxes hide condition
        if (
          !display_till_years &&
          !display_till_months &&
          !display_till_days &&
          !display_till_hours &&
          !display_till_minutes &&
          !display_till_seconds
        ) {
          $('#countdown-boxes').hide();
        } else {
          // seconds display condition
          if (display_till_seconds) {
            var seconds = Math.floor(difference / 1000);

            $('#years').hide();
            $('#months').hide();
            $('#days').hide();
            $('#hours').hide();
            $('#minutes').hide();
            $('#seconds').show();
          }

          // till minutes display condition
          if (display_till_minutes) {
            var minutes = Math.floor(difference / (1000 * 60));
            var seconds = Math.floor((difference % (1000 * 60)) / 1000);

            $('#years').hide();
            $('#months').hide();
            $('#days').hide();
            $('#hours').hide();
            $('#minutes').show();
            $('#seconds').show();
          }

          // till hours display condition
          if (display_till_hours) {
            var hours = Math.floor(difference / (1000 * 60 * 60));
            var minutes = Math.floor(
              (difference % (1000 * 60 * 60)) / (1000 * 60),
            );
            var seconds = Math.floor((difference % (1000 * 60)) / 1000);

            $('#years').hide();
            $('#months').hide();
            $('#days').hide();
            $('#hours').show();
            $('#minutes').show();
            $('#seconds').show();
          }

          // till days display condition
          if (display_till_days) {
            var days = Math.floor(difference / (1000 * 60 * 60 * 24));
            var hours = Math.floor(
              (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
            );
            var minutes = Math.floor(
              (difference % (1000 * 60 * 60)) / (1000 * 60),
            );
            var seconds = Math.floor((difference % (1000 * 60)) / 1000);

            $('#years').hide();
            $('#months').hide();
            $('#days').show();
            $('#hours').show();
            $('#minutes').show();
            $('#seconds').show();
          }

          // till months display condition
          if (display_till_months) {
            var months = Math.floor(
              difference / (1000 * 60 * 60 * 24 * 30.436875),
            );
            var days = Math.floor(
              (difference % (1000 * 60 * 60 * 24 * 30.436875)) /
                (1000 * 60 * 60 * 24),
            );
            var hours = Math.floor(
              (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
            );
            var minutes = Math.floor(
              (difference % (1000 * 60 * 60)) / (1000 * 60),
            );
            var seconds = Math.floor((difference % (1000 * 60)) / 1000);

            $('#years').hide();
            $('#months').show();
            $('#days').show();
            $('#hours').show();
            $('#minutes').show();
            $('#seconds').show();
          }

          // till years display condition
          if (display_till_years) {
            var years = Math.floor(
              difference / (1000 * 60 * 60 * 24 * 30.436875 * 12),
            );
            var months = Math.floor(
              (difference % (1000 * 60 * 60 * 24 * 30.436875 * 12)) /
                (1000 * 60 * 60 * 24 * 30.436875),
            );
            var days = Math.floor(
              (difference % (1000 * 60 * 60 * 24 * 30.436875)) /
                (1000 * 60 * 60 * 24),
            );
            var hours = Math.floor(
              (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
            );
            var minutes = Math.floor(
              (difference % (1000 * 60 * 60)) / (1000 * 60),
            );
            var seconds = Math.floor((difference % (1000 * 60)) / 1000);

            $('#years').show();
            $('#months').show();
            $('#days').show();
            $('#hours').show();
            $('#minutes').show();
            $('#seconds').show();
          }

          // Hr, Min, Sec hide condition
          if ('yes' == hide_hr_min_sec) {
            $('#hours').hide();
            $('#minutes').hide();
            $('#seconds').hide();
          }
        }

        // Double zero conditions
        if (years < 10) {
          years = '0' + years;
        }
        if (months < 10) {
          months = '0' + months;
        }
        if (days < 10) {
          days = '0' + days;
        }
        if (hours < 10) {
          hours = '0' + hours;
        }
        if (minutes < 10) {
          minutes = '0' + minutes;
        }
        if (seconds < 10) {
          seconds = '0' + seconds;
        }

        // display numbers
        years > 0 ? $(frontYears).text(years) : $('#years').hide();
        months > 0 ? $(frontMonths).text(months) : $('#months').hide();
        days > 0 ? $(frontDays).text(days) : $('#days').hide();
        $(frontHours).text(hours);
        $(frontminutes).text(minutes);
        $(frontSeconds).text(seconds);
      }
    }
    countDown();
    var countd = setInterval(function() {
      countDown();
    }, 1000);
  },

  init__form_order: function() {
    const order_form = $('#order-form');
    var url =
        'https://docs.google.com/forms/d/e/1FAIpQLSflRweL-rc-OofrOZaTYDrSAAXp07SVC4Fex62dkdfl8k6CIA/formResponse',
      name = order_form.find('.form_name'),
      phone = order_form.find('.form_number'),
      address = order_form.find('.form_address');

    name.on('keyup', function() {
      name.removeClass('is-invalid');
    });

    phone.on('keyup', function() {
      phone.removeClass('is-invalid');
    });

    address.on('keyup', function() {
      address.removeClass('is-invalid');
    });
    order_form.on('submit', function(event) {
      event.preventDefault();
      if (!name.val()) {
        name.addClass('is-invalid');
        return;
      }
      if (!phone.val()) {
        phone.addClass('is-invalid');
        phone
          .next('.invalid-feedback')
          .text('Vui lòng nhập số điện thoại để shop ship hàng cho bạn nhé!');

        return;
      }

      if (!Steenify.home.validate_phone(phone.val())) {
        phone
          .next('.invalid-feedback')
          .text('Số điện thoại của bạn chưa đúng rồi nè :)))');
        phone.addClass('is-invalid');
        return;
      }

      if (!address.val()) {
        address.addClass('is-invalid');
        return;
      }

      var data = {
        'entry.815311534': name.val(),
        'entry.1174324262': phone.val(),
        'entry.1660265735': address.val(),
      };
      $.ajax({
        url: url,
        method: 'POST',
        datatype: 'application/json',
        crossDomain: true,
        data: data,
        success: function() {
          name.val('');
          phone.val('');
          address.val('');
          window.location.href = '/thank-you';
        },
        error: function() {
          name.val('');
          phone.val('');
          address.val('');
          window.location.href = '/thank-you';
        },
      });
    });
  },
};
