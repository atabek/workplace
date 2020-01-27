<template>
  <div class="services">
    <div class="container">
      <div class="row centered-text">
        <h2 class="heading-secondary">Наши услуги</h2>
      </div>
      <h3 class="heading-tertiary">
        Доставка грузов различным видом транспорта
      </h3>
      <p>
        Мы можем предоставить комплексные транспортные услуги с эффективным
        совмещением различных методов транспортировки.
      </p>
      <div class="transport-type-list">
        <div class="transport-type">
          <div class="transport-type__image">
            <span>&#9972;</span>
          </div>
          <div class="transport-type__heading">
            <strong>Морской</strong>
          </div>
          <div class="transport-type__description">
            <span>Самый экономичный вид транспорта</span>
          </div>
        </div>
        <div class="transport-type">
          <div class="transport-type__image">
            <span>&#128747;</span>
          </div>
          <div class="transport-type__heading">
            <strong>Воздушный</strong>
          </div>
          <div class="transport-type__description">
            <span>Самый быстрый способ транспортировки</span>
          </div>
        </div>
        <div class="transport-type">
          <div class="transport-type__image">
            <span>&#128642;</span>
          </div>
          <div class="transport-type__heading">
            <strong>Сухопутный</strong>
          </div>
          <div class="transport-type__description">
            <span>
              Автомобильный и Железнодорожный транспорт позволяет быструю
              доставку по поверхности суши, комбинациями:
            </span>
            <ul>
              <li>От Двери до Двери</li>
              <li>От Порта до Двери</li>
              <li>От Двери до Порта</li>
            </ul>
          </div>
        </div>
      </div>
      <ul>
        <li>
          Железнодорожный вид транспорта позволяет быструю, экономичную
          грузоперевозку больших объемов на дальние расстояния.
        </li>
        <li>
          Мы предоставляем железнодорожную транспортировку грузов разнообразными
          видами вагонов помимо стандартных.
        </li>
        <li>
          Наш долгосрочный опыт работы с РЖД (Российские Железные Дороги) и КЖД
          (Китайские Железные Дороги) обеспечит транспортировку вашего груза с
          минимальными задержками.
        </li>
      </ul>
      <h3 class="heading-tertiary">Маршруты</h3>
      <p>
        ДАЛЬНИЙ ВОСТОК => ТРАНССИБИРСКАЯ => ЦЕНТРАЛЬНАЯ АЗИЯ, ЕВРОПА РФ
        ЖЕЛЕЗНОДОРОЖНАЯ МАГИСТРАЛЬ
      </p>
      <p>
        КИТАЙ => ТРАНСМОНГОЛЬСКАЯ => ЦЕНТРАЛЬНАЯ АЗИЯ,ЕВРОПА, МОНГОЛИЯ
        ЖЕЛЕЗНОДОРОЖНАЯ МАГИСТРАЛЬ
      </p>
      <p></p>
      <h3 class="heading-tertiary">Доставка различных видов груза</h3>
      <div>
        Путем наиболее оптимального совмещения различных методов транспортировки
        у нас есть возможность предоставить нашим клиентам перевозку
        нестандартных грузов.
      </div>
      <ul>
        <li>Скоропортящийся груз</li>
        <li>Особо опасный груз</li>
        <li>Ро-Ро груз или груз на колесной основе</li>
        <li>Крупногабаритный, тяжелый груз</li>
        <li>Брейк-Балк или груз, перевозимый без использования контейнеров</li>
        <li>Проектный груз</li>
        <ul>
          <li>Таможенная очистка грузов</li>
          <li>Консолидация грузов</li>
          <li>Хранение и доставка «От Двери до Двери» для всех видов грузов</li>
          <li>Транспортировка через Третьи Страны</li>
          <ul>
            <li>
              Используя наши оптимальные транспортные маршруты, мы можем
              предоставить заказчику комплексные транспортные услуги через
              третьи страны, включая офомление необходимой документации. Мы
              думаем, что данный вид транспортировки будет более затребован в
              будущем.
            </li>
          </ul>
          <li>Продажа использованных контейнеров</li>
          <ul>
            <li>
              Наша команда может предложить Вам б/у контейнеры для
              транспортировки вашего груза по выгодной цене. У нас имеется
              большой опыт по продаже использованных контейнеров. Будем рады
              Вашему обращениию.
            </li>
          </ul>
          <li>Импорт продукции в Японию</li>
          <li>
            Мы уведомляем наших клиентов и всегда держим их в курсе текущего
            местонахождении их груза
          </li>
        </ul>
      </ul>
    </div>
  </div>
</template>
<style lang="scss">
.services {
  font-size: 1.5rem;
}
.transport-type-list {
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
  & .transport-type {
    max-width: 300px;
    & .transport-type__image {
      text-align: center;
      font-size: 5rem;
    }
    & .transport-type__heading {
      text-align: center;
    }
    & .transport-type__description {
      text-align: center;
    }
  }
}
ul {
  margin-left: 2rem;
  margin-bottom: 2rem;
}
</style>
