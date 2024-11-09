<template>
  <footer class="footer text-center text-lg-start mt-5">
    <!-- Grid container -->
    <div class="container p-4">
      <!-- Grid row -->
      <div class="row mt-4">
        <!-- Grid column -->
        <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-4">Про нас</h5>
          <p><strong>Ужгород-2</strong> - автостанція</p>

        </div>

        <!-- Grid column -->
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-4 pb-1">Контакти</h5>

          <ul class="fa-ul" style="margin-left: 1.65em;">
            <li class="mb-3">
              <span class="fa-li"><em class="fas fa-home"></em></span><span class="ms-2">Ужгород, Україна</span>
            </li>
            <li class="mb-3">
              <span class="fa-li"><em class="fas fa-envelope"></em></span><span class="ms-2">nnnnnnnnnnnnn@outlook.com</span>
            </li>
            <li class="mb-3">
              <span class="fa-li"><em class="fas fa-phone"></em></span><span class="ms-2">+380(99)99-99-999</span>
            </li>
          </ul>
        </div>

        <!-- Grid column -->
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-4">Знайти нас</h5>
          <iframe class="google_map rounded"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20764.992544472373!2d22.30279819999999!3d48.6163782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473aa4ec7c7a13d1%3A0x28b3f342f93e9f27!2z0JfQsNGA0YDQvtCz0L7Qu9Cw0LzQvtCw0Y8!5e0!3m2!1suk!2sus!4v1692901381688!5m2!1suk!2sus"
                  allowfullscreen="" loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="text-center copyright p-3">
      <span class="credit">Створено <a href="https://github.com/PISYN122">Tilt</a> | </span>
      <span class="far fa-copyright"></span><span> 2024</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",  // Змінили ім'я компонента на багатослівне
  methods: {
    openLink(url) {
      window.open(url, "_blank");
    }
  }
};
</script>

<style scoped>
.footer {
  background-color: #f8f9fa;
  width: 100%; /* Розтягуємо футер на всю ширину */
  bottom: 0; /* Встановлюємо футер донизу */
  left: 0; /* Встановлюємо футер до лівого краю */
  padding: 5px 0; /* Зменшуємо висоту футера в два рази */
}

.footer .container {
  max-width: 100%; /* Розтягуємо контейнер на всю ширину */
}

.footer h5 {
  font-size: 1.1rem; /* Трохи зменшуємо розмір шрифта */
  font-weight: 300;
  color: #343a40;
}

.footer .btn {
  margin: 3px; /* Зменшуємо маргіни для кнопок */
  background-color: #007bff;
  color: white;
}

.footer .btn:hover {
  background-color: #0056b3;
}

.footer .google_map {
  width: 100%;
  height: 100px; /* Зменшуємо висоту карти */
  border: 0;
}

.footer .fa-ul {
  list-style: none;
  padding-left: 1.65em;
}

.footer .fa-li {
  margin-bottom: 8px; /* Зменшуємо відстань між елементами списку */
}

.footer .copyright {
  background-color: #343a40;
  color: white;
  padding: 8px; /* Зменшуємо відступи в нижньому тексті */
  font-size: 0.9rem;
  text-align: center; /* Вирівнюємо текст по центру */
  width: 100%; /* Фіксуємо ширину на 100% */
}
</style>