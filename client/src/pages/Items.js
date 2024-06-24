import '../index.css';
import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import AdminHeader from '../components/AdminHeader';
import Add from '../components/models/Add';
import ChangesItem from '../components/models/ChangesItem';

const Items = ({ user }) => {
    const [itemsPcOpti, setItemsPcOpti] = useState([
        {
            id: 1,
            title: "One",
            img: "pc1-opt.png",
            desc: "Оптимальный старт в мир современного гейминга",
            videocard: "Palit GeForce RTX 4060 Dual [8GB, 3072 CUDA]",
            cpu: "Intel® Core™ i5-12400(F) [до 4.4GHz, 6 ядер]",
            mb: "MSI PRO B760M-A [DDR4, Wi-Fi]",
            temp: "DeepCool AG400 BK ARGB",
            ram: "16GB Kingston FURY Beast RGB [DDR4, 3600MHz, 2x8GB]",
            memory: "500GB ADATA LEGEND 800 [3500MB/s, Gen4]",
            category: "PC",
            price: "59.999",
            tags: ["optimaze"]
        },
        {
            id: 2,
            title: "One",
            img: "pc1-opt.png",
            desc: "Оптимальный старт в мир современного гейминга",
            videocard: "Palit GeForce RTX 4060 Dual [8GB, 3072 CUDA]",
            cpu: "Intel® Core™ i5-12400(F) [до 4.4GHz, 6 ядер]",
            mb: "MSI PRO B760M-A [DDR4, Wi-Fi]",
            temp: "DeepCool AG400 BK ARGB",
            ram: "16GB Kingston FURY Beast RGB [DDR4, 3600MHz, 2x8GB]",
            memory: "500GB ADATA LEGEND 800 [3500MB/s, Gen4]",
            category: "PC",
            price: "59.999",
            tags: ["optimaze"]
        },
        {
            id: 3,
            title: "One",
            img: "pc1-opt.png",
            desc: "Оптимальный старт в мир современного гейминга",
            videocard: "Palit GeForce RTX 4060 Dual [8GB, 3072 CUDA]",
            cpu: "Intel® Core™ i5-12400(F) [до 4.4GHz, 6 ядер]",
            mb: "MSI PRO B760M-A [DDR4, Wi-Fi]",
            temp: "DeepCool AG400 BK ARGB",
            ram: "16GB Kingston FURY Beast RGB [DDR4, 3600MHz, 2x8GB]",
            memory: "500GB ADATA LEGEND 800 [3500MB/s, Gen4]",
            category: "PC",
            price: "59.999",
            tags: ["optimaze"]
        },
        {
            id: 4,
            title: "One",
            img: "pc1-opt.png",
            desc: "Оптимальный старт в мир современного гейминга",
            videocard: "Palit GeForce RTX 4060 Dual [8GB, 3072 CUDA]",
            cpu: "Intel® Core™ i5-12400(F) [до 4.4GHz, 6 ядер]",
            mb: "MSI PRO B760M-A [DDR4, Wi-Fi]",
            temp: "DeepCool AG400 BK ARGB",
            ram: "16GB Kingston FURY Beast RGB [DDR4, 3600MHz, 2x8GB]",
            memory: "500GB ADATA LEGEND 800 [3500MB/s, Gen4]",
            category: "PC",
            price: "59.999",
            tags: ["optimaze"]
        },
        {
            id: 5,
            title: "Cyber",
            img: "cyber.png",
            desc: "Экстремальная производительность и передовые компоненты в вершине игровой линейки",
            videocard: "MSI GeForce RTX 4070 Ti SUPER GAMING SLIM [16GB, 8448 CUDA]",
            cpu: "Intel® Core™ i5-14600K(F) [до 5.3GHz, 14 ядер]",
            mb: "MSI MAG Z790 TOMAHAWK MAX [DDR5, Wi-Fi]",
            temp: "MEG CORELIQUID S360",
            ram: "32GB TEAMGROUP T-Force Delta RGB Black [DDR5, 6400MHz, 2x16GB]",
            memory: "2TB Samsung 990 PRO [7450MB/s, Gen4]",
            category: "PC",
            price: "105.999",
            tags: ["power"]
        },
        {
            id: 6,
            title: "Cyber",
            img: "cyber.png",
            desc: "Экстремальная производительность и передовые компоненты в вершине игровой линейки",
            videocard: "MSI GeForce RTX 4070 Ti SUPER GAMING SLIM [16GB, 8448 CUDA]",
            cpu: "Intel® Core™ i5-14600K(F) [до 5.3GHz, 14 ядер]",
            mb: "MSI MAG Z790 TOMAHAWK MAX [DDR5, Wi-Fi]",
            temp: "MEG CORELIQUID S360",
            ram: "32GB TEAMGROUP T-Force Delta RGB Black [DDR5, 6400MHz, 2x16GB]",
            memory: "2TB Samsung 990 PRO [7450MB/s, Gen4]",
            category: "PC",
            price: "105.999",
            tags: ["power"]
        },
        {
            id: 7,
            title: "Cyber",
            img: "cyber.png",
            desc: "Экстремальная производительность и передовые компоненты в вершине игровой линейки",
            videocard: "MSI GeForce RTX 4070 Ti SUPER GAMING SLIM [16GB, 8448 CUDA]",
            cpu: "Intel® Core™ i5-14600K(F) [до 5.3GHz, 14 ядер]",
            mb: "MSI MAG Z790 TOMAHAWK MAX [DDR5, Wi-Fi]",
            temp: "MEG CORELIQUID S360",
            ram: "32GB TEAMGROUP T-Force Delta RGB Black [DDR5, 6400MHz, 2x16GB]",
            memory: "2TB Samsung 990 PRO [7450MB/s, Gen4]",
            category: "PC",
            price: "105.999",
            tags: ["power"]
        },
        {
            id: 8,
            title: "Cyber",
            img: "cyber.png",
            desc: "Экстремальная производительность и передовые компоненты в вершине игровой линейки",
            videocard: "MSI GeForce RTX 4070 Ti SUPER GAMING SLIM [16GB, 8448 CUDA]",
            cpu: "Intel® Core™ i5-14600K(F) [до 5.3GHz, 14 ядер]",
            mb: "MSI MAG Z790 TOMAHAWK MAX [DDR5, Wi-Fi]",
            temp: "MEG CORELIQUID S360",
            ram: "32GB TEAMGROUP T-Force Delta RGB Black [DDR5, 6400MHz, 2x16GB]",
            memory: "2TB Samsung 990 PRO [7450MB/s, Gen4]",
            category: "PC",
            price: "105.999",
            tags: ["power"]
        },
    ]);
    const [addVisible, setAddVisible] = useState(false);
    const [changesItemVisible, setChangesItemVisible] = useState(false);

  return (
    <>
    <AdminHeader user={user} />
    <div className="container-items">
        <Button className="btn-admin-panel" onClick={() => setAddVisible(true)}>
            Добавить товар
        </Button>
        <div className="block">
            <span>Товар</span>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Название</th>
              <th>Характеристики</th>
              <th>Цена</th>
              <th>Действие</th>
            </tr>
          </thead>
          <tbody>
            {itemsPcOpti.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td><strong>{item.title}</strong></td>
                <td className="specifications">{`${item.videocard}, ${item.cpu}, ${item.mb}, ${item.temp}, ${item.ram}, ${item.memory}`}</td>
                <td>{item.price}</td>
                <td><button className="btn-edit" onClick={() => setChangesItemVisible(true)} >Изменить</button></td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
    <Add show={addVisible} onHide={() => setAddVisible(false)} />
    <ChangesItem show={changesItemVisible} onHide={() => setChangesItemVisible(false)} />
    </>
  );
}

export default Items;
