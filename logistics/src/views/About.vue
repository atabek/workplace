<template>
  <div class="about">
    <div class="container">
      <div class="row centered-text">
        <h2 class="heading-secondary">Кто мы</h2>
      </div>
      <div class="company-info">
        <div class="company-info__motto">
          <h3 class="heading-tertiary centered-text">GWG Logistics</h3>
          <ul>
            <li>
              японская международная транспортно-экспедиторская компания, город
              Токио, основанная профессионалами данной отрасли.
            </li>
            <li>
              является членом ассоциации
              <u>JIFFA (Japan International Freight Forwarder Association)</u>
              с 2012 года.
            </li>
          </ul>
        </div>
      </div>
      <div class="company-features">
        <div class="company-feature">
          <div class="company-feature__image">
            <span>&#127919;</span>
          </div>
          <div class="company-feature__heading">
            <strong>Цель нашей компании</strong>
          </div>
          <div class="company-feature__description">
            <span>завоевать доверие наших клиентов.</span>
          </div>
        </div>
        <div class="company-feature">
          <div class="company-feature__image">
            <span>&#9971;</span>
          </div>
          <div class="company-feature__heading">
            <strong>Задача нашей компании</strong>
          </div>
          <div class="company-feature__description">
            <span>
              заключается в эффективной организации доставки грузов в указанное
              место и срок.
            </span>
          </div>
        </div>
      </div>
      <div class="company-explanations">
        <div class="company-explanation__item">
          <span>
            Логистику можно сравнить с кровью, доставляющей питательные вещества
            и таким образом поддерживающей человеческое тело. Наша компания
            является профессионалом в сфере международной логистики, выполняя
            поиск поиск оптимальных маршрутов, удовлетворяющих требованиям
            клиентов и образом заслуживая их доверие.
          </span>
        </div>
        <div class="company-explanation__item">
          <span>
            Мы обладаем особенно богатым опытом, и потому специализируемся на
            перевозках по территории Российской федерации, Монголии, Китая и
            Центральной Азии.
          </span>
        </div>
        <div class="company-explanation__item">
          <span>
            Особенностью и основным преимуществом GWG Logistics является
            развитие и предоставление уникальных и наиболее эффективных
            логистических решений нашим клиентам. Каждое логистическое
            предложение мы разрабатываем с индивидуальным подходом и прилагаем
            все усилия для того чтобы наши клиенты были удовлетворены
            результатом.
          </span>
        </div>
        <div class="company-explanation__item">
          <span>
            Из офисов в Токио, Шанхае и Кыргызской Республики наша компания
            предоставляет комплексные услуги по доставке различных видов груза
            различными методами и способами транспортировки, обладая прямыми
            представительствами в Китае, Российской Федерации, Монголии, странах
            СНГ и на Ближнем Востоке.
          </span>
        </div>
      </div>
      <div class="company-invitation">
        <span>
          Будем рады предоставить Вам профессиональные рекомендации для решения
          комплексных транспортных задач! Обращайтесь, ждем Вас в Green World
          Group Logistics!
        </span>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.about {
  font-size: 1.5rem;
}
.company-info {
  margin-bottom: 3rem;
  & ul {
    max-width: 400px;
    margin: 0 auto;
  }
}
.company-features {
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
  & .company-feature {
    width: 40%;
    & .company-feature__image {
      text-align: center;
      font-size: 5rem;
    }
    & .company-feature__heading {
      text-align: center;
    }
    & .company-feature__description {
      text-align: center;
    }
  }
}
.company-explanations {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 2rem;
  & .company-explanation__item {
    max-width: 400px;
    text-align: justify;
    padding: 1rem;
  }
}
.company-invitation {
  margin: 2rem auto;
  max-width: 800px;
  text-align: center;
  text-decoration: underline;
}
</style>
