const soldier = {
  name: 'Masterchief',
  health: 10,
  ammo: {
    gunName: 'ПП',
    bullets: 30,
  },
  supply: 3,

  fire: function () {
    if(this.bullets == 0){
      console.log('обойма пуста. Перезарядитесь')
    }
    this.bullets--
    console.log('Бах-Бах')
  },
  reload: function () {
    if(this.supply == 0){
      console.log('не осталось припасов')
    }
    this.supply--;
    this.bullets = 30;
    console.log('перезарядка...')
  },
  wound: function () {
    if(this.health == 0){
      console.log('Ты проиграл')
    }
    this.health--;
    
  },
}
// Проверил все
