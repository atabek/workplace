<template>
  <main>
    <div class="featured-content">
      <div class="container">
        <div class="heading__text-box">
          <h1 class="heading-primary">
            <span class="heading-primary--main">GWG Logistics</span>
            <span class="heading-primary--sub"
              >профессионалы в транспортно-экспедиторской отрасли</span
            >
          </h1>
          <router-link to="/about" class="btn btn--white btn--animated">
            Далее&hellip;
          </router-link>
        </div>
      </div>
    </div>
    <div class="featured-about">
      <div class="container">
        <h2>Кто мы</h2>
        <p>
          <strong>GWG Logistics</strong> - японская международная
          транспортно-экспедиторская компания, город Токио, основанная
          профессионалами данной отрасли.
        </p>
        <p>
          <strong>GWG Logistics</strong> является членом ассоциации
          <u>JIFFA (Japan International Freight Forwarder Association)</u> с
          2012 года.
        </p>
        <p>
          <strong>Цель нашей компании</strong> – завоевать доверие наших
          клиентов.
        </p>
        <p>
          <strong>Задача нашей компании</strong> заключается в эффективной
          организации доставки грузов в указанное место и срок.
        </p>
      </div>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home",
  components: {}
};
</script>
<style lang="scss">
@import "../scss/_variables.scss";
.featured-content {
  height: 95vh;
  background-image: linear-gradient(
    to right bottom,
    rgba($backgroundColor, 0.8),
    rgba($fourth, 0.8)
  );
  background-size: cover;
  background-position: top;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);
}
.heading__text-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.heading-primary {
  text-transform: uppercase;

  backface-visibility: hidden;
  margin-bottom: 6rem;

  &--main {
    display: block;
    font-size: 5rem;
    font-weight: 400;
    letter-spacing: 3rem;
    @media (max-width: 768px) {
      font-size: 2.5rem;
      letter-spacing: 1rem;
    }

    animation-name: moveInLeft;
    animation-duration: 1s;
    animation-timing-function: ease-out;
  }

  &--sub {
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 1rem;
    animation: moveInRight 1s ease-out;
    @media (max-width: 768px) {
      font-size: 1rem;
      letter-spacing: 0.5rem;
    }
  }
}

.heading-secondary {
  font-size: 3.5rem;
  text-transform: uppercase;
  font-weight: 700;
  display: inline-block;
  background-image: linear-gradient(to right, black, $primary);
  color: transparent;
  letter-spacing: 0.2rem;
  transition: all 0.2s;

  &:hover {
    transform: skewY(2deg) skewX(15deg) scale(1.1);
    text-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.2);
  }
}

.heading-tertiary {
  font-weight: 700;
  text-transform: uppercase;
}

.btn {
  &,
  &:link,
  &:visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5rem 4rem;
    display: inline-block;
    border-radius: 10rem;
    transition: all 0.2s;
    position: relative;
    font-size: 1.5rem;

    //Change for the <button> element
    border: none;
    cursor: pointer;
    @media (max-width: 768px) {
      font-size: 1rem;
      padding: 1rem 2rem;
    }
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);

    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }

  &:active,
  &:focus {
    outline: none;
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }

  &--white {
    background-color: white;
    color: darkgray;

    &::after {
      background-color: white;
    }
  }

  &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
  }

  &--animated {
    animation: moveInBottom 0.5s ease-out 0.75s;
    animation-fill-mode: backwards;
  }
}

.btn-text {
  &:link,
  &:visited {
    font-size: 1.5rem;
    color: $primary;
    display: inline-block;
    text-decoration: none;
    border-bottom: 1px solid $primary;
    padding: 3px;
    transition: all 0.2s;
  }

  &:hover {
    background-color: $primary;
    color: white;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    transform: translateY(0);
  }
}

@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-10rem);
  }

  80% {
    transform: translateX(1rem);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes moveInRight {
  0% {
    opacity: 0;
    transform: translateX(10rem);
  }

  80% {
    transform: translateX(-1rem);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes moveInBottom {
  0% {
    opacity: 0;
    transform: translateY(3rem);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
}
</style>
