import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import QuestSection from './components/QuestSection';
import Footer from './components/Footer';
import Particles from './components/Particles';

function App() {
  const quests = [
    {
      id: 1,
      title: 'Хоррор Цирк',
      description: 'Окунитесь в атмосферу заброшенного цирка, где каждый шаг может стать последним. Тайны, скрытые за кулисами, ждут своих жертв.',
      image: 'https://sun9-80.userapi.com/s/v1/ig2/23Y8ZrA73AypSt9LWRWnxSZvwFQ8HBzbSSoIU6dd_SOQJpyNvDJ3CcNjcOxSbLh0CM30Dj6H8KvYuKyj3Gd9i4bq.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,756x756&from=bu&u=oL2No9JZqmNrL2dNQIgMn0lZi4PJC31rdZBvRsxcx9Y&cs=540x0',
      features: [
        'Интерактивные головоломки',
        'Атмосфера заброшенного цирка',
        'Профессиональные актеры',
        '60 минут ужаса'
      ]
    },
    {
      id: 2,
      title: 'Карантин',
      description: 'Вы оказались в закрытой лаборатории, где произошла утечка опасного вируса. Время на исходе, а выход заблокирован. Сможете ли вы выбраться?',
      image: 'https://sun9-68.userapi.com/s/v1/ig2/6RxKBZF1zTbwawiTeF80Evs9u1zMZedaIXKt97jgE5C71gKPc7sOAstQASJTnFadnhgl_fQmCzjfDlQRopehtFz1.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,756x756&from=bu&u=4aNTMCKcf6xJL5f_8yZ6hNT-Vm08l0aOLi0Lu4dCWpo&cs=540x0',
      features: [
        'Научная тематика',
        'Логические загадки',
        'Реалистичные декорации',
        '75 минут выживания'
      ]
    }
  ];

  return (
    <div className="App">
      <Particles />
      <Header />
      <Hero />
      <div className="quests-container">
        {quests.map(quest => (
          <QuestSection key={quest.id} quest={quest} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;

