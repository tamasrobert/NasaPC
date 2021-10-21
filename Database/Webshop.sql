-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2021. Sze 16. 12:18
-- Kiszolgáló verziója: 10.4.14-MariaDB
-- PHP verzió: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `webshop`
--
CREATE DATABASE IF NOT EXISTS `webshop` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `webshop`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `billing_addresses`
--

CREATE TABLE `billing_addresses` (
  `ID` int(11) NOT NULL,
  `userID` int(11) DEFAULT NULL,
  `city` int(11) NOT NULL,
  `street` varchar(255) NOT NULL,
  `house_number` int(11) NOT NULL,
  `building` char(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `cities`
--

CREATE TABLE `cities` (
  `ID` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `zip_code` int(11) NOT NULL,
  `region` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `contacts`
--

CREATE TABLE `contacts` (
  `ID` int(11) NOT NULL,
  `userID` int(11) DEFAULT NULL,
  `orderID` int(11) NOT NULL,
  `real_name` varchar(255) NOT NULL,
  `email` varchar(64) NOT NULL,
  `phone` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `delivery`
--

CREATE TABLE `delivery` (
  `ID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `orderID` int(11) NOT NULL,
  `delivery_progressID` int(11) NOT NULL,
  `last_modified` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `delivery_progresses`
--

CREATE TABLE `delivery_progresses` (
  `ID` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `extras`
--

CREATE TABLE `extras` (
  `ID` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `orders`
--

CREATE TABLE `orders` (
  `ID` int(11) NOT NULL,
  `userID` int(11) DEFAULT NULL,
  `total_cost` float NOT NULL,
  `personal_address` int(11) NOT NULL,
  `billing_address` int(11) NOT NULL,
  `payment_methodID` int(11) NOT NULL,
  `orderDate` datetime NOT NULL DEFAULT current_timestamp(),
  `order_IP` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `orders_extras`
--

CREATE TABLE `orders_extras` (
  `orderID` int(11) NOT NULL,
  `extraID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `orders_products`
--

CREATE TABLE `orders_products` (
  `orderID` int(11) NOT NULL,
  `productID` int(11) NOT NULL,
  `amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `payment_methods`
--

CREATE TABLE `payment_methods` (
  `ID` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `personal_addresses`
--

CREATE TABLE `personal_addresses` (
  `ID` int(11) NOT NULL,
  `userID` int(11) DEFAULT NULL,
  `city` int(11) NOT NULL,
  `street` varchar(255) NOT NULL,
  `house_number` int(11) NOT NULL,
  `building` char(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `positions`
--

CREATE TABLE `positions` (
  `ID` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `products`
--

CREATE TABLE `products` (
  `ID` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `category` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `discount` float DEFAULT NULL,
  `discount_until` datetime DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `warranty_months` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `questions`
--

CREATE TABLE `questions` (
  `ID` int(11) NOT NULL,
  `productID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `question` text NOT NULL,
  `posted_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `question_answers`
--

CREATE TABLE `question_answers` (
  `ID` int(11) NOT NULL,
  `questionID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `answer` text NOT NULL,
  `posted_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `regions`
--

CREATE TABLE `regions` (
  `ID` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `reviews`
--

CREATE TABLE `reviews` (
  `ID` int(11) NOT NULL,
  `productID` int(11) NOT NULL,
  `userID` int(11) DEFAULT NULL,
  `stars` tinyint(4) NOT NULL,
  `review` text DEFAULT NULL,
  `positives` text DEFAULT NULL,
  `negatives` text DEFAULT NULL,
  `posted_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

CREATE TABLE `users` (
  `ID` int(11) NOT NULL,
  `username` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  `position` int(11) NOT NULL,
  `last_login` datetime NOT NULL DEFAULT current_timestamp(),
  `registered` datetime NOT NULL DEFAULT current_timestamp(),
  `registration_IP` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `billing_addresses`
--
ALTER TABLE `billing_addresses`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_billing_addresses_userID` (`userID`),
  ADD KEY `FK_billing_addresses_city` (`city`);

--
-- A tábla indexei `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `UK_cities_ID` (`ID`),
  ADD KEY `FK_cities_region` (`region`);

--
-- A tábla indexei `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_contacts_orderID` (`orderID`),
  ADD KEY `FK_contacts_userID` (`userID`);

--
-- A tábla indexei `delivery`
--
ALTER TABLE `delivery`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_delivery_userID` (`userID`),
  ADD KEY `FK_delivery_orderID` (`orderID`),
  ADD KEY `FK_delivery_delivery_progressID` (`delivery_progressID`);

--
-- A tábla indexei `delivery_progresses`
--
ALTER TABLE `delivery_progresses`
  ADD PRIMARY KEY (`ID`);

--
-- A tábla indexei `extras`
--
ALTER TABLE `extras`
  ADD PRIMARY KEY (`ID`);

--
-- A tábla indexei `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_orders_personal_address` (`personal_address`),
  ADD KEY `FK_orders_billing_address` (`billing_address`),
  ADD KEY `FK_orders_userID` (`userID`),
  ADD KEY `FK_orders_payment_methodID` (`payment_methodID`);

--
-- A tábla indexei `orders_extras`
--
ALTER TABLE `orders_extras`
  ADD KEY `FK_orders_extras_orderID` (`orderID`),
  ADD KEY `FK_orders_extras_extraID` (`extraID`);

--
-- A tábla indexei `orders_products`
--
ALTER TABLE `orders_products`
  ADD KEY `FK_orders_products_orderID` (`orderID`),
  ADD KEY `FK_orders_products_productID` (`productID`);

--
-- A tábla indexei `payment_methods`
--
ALTER TABLE `payment_methods`
  ADD PRIMARY KEY (`ID`);

--
-- A tábla indexei `personal_addresses`
--
ALTER TABLE `personal_addresses`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_personal_addresses_userID` (`userID`),
  ADD KEY `FK_personal_addresses_city` (`city`);

--
-- A tábla indexei `positions`
--
ALTER TABLE `positions`
  ADD PRIMARY KEY (`ID`);

--
-- A tábla indexei `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`ID`);

--
-- A tábla indexei `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_questions_productID` (`productID`),
  ADD KEY `FK_questions_userID` (`userID`);

--
-- A tábla indexei `question_answers`
--
ALTER TABLE `question_answers`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_question_answers_questionID` (`questionID`),
  ADD KEY `FK_question_answers_userID` (`userID`);

--
-- A tábla indexei `regions`
--
ALTER TABLE `regions`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `UK_regions_ID` (`ID`);

--
-- A tábla indexei `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_reviews_productID` (`productID`),
  ADD KEY `FK_reviews_userID` (`userID`);

--
-- A tábla indexei `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `UK_users_ID` (`ID`),
  ADD KEY `FK_users_position` (`position`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `billing_addresses`
--
ALTER TABLE `billing_addresses`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `cities`
--
ALTER TABLE `cities`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `contacts`
--
ALTER TABLE `contacts`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `delivery`
--
ALTER TABLE `delivery`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `delivery_progresses`
--
ALTER TABLE `delivery_progresses`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `extras`
--
ALTER TABLE `extras`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `orders`
--
ALTER TABLE `orders`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `payment_methods`
--
ALTER TABLE `payment_methods`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `personal_addresses`
--
ALTER TABLE `personal_addresses`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `positions`
--
ALTER TABLE `positions`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `products`
--
ALTER TABLE `products`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `questions`
--
ALTER TABLE `questions`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `question_answers`
--
ALTER TABLE `question_answers`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `regions`
--
ALTER TABLE `regions`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `reviews`
--
ALTER TABLE `reviews`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `billing_addresses`
--
ALTER TABLE `billing_addresses`
  ADD CONSTRAINT `FK_billing_addresses_city` FOREIGN KEY (`city`) REFERENCES `cities` (`ID`) ON DELETE NO ACTION,
  ADD CONSTRAINT `FK_billing_addresses_userID` FOREIGN KEY (`userID`) REFERENCES `users` (`ID`) ON DELETE NO ACTION;

--
-- Megkötések a táblához `cities`
--
ALTER TABLE `cities`
  ADD CONSTRAINT `FK_cities_region` FOREIGN KEY (`region`) REFERENCES `regions` (`ID`) ON DELETE NO ACTION;

--
-- Megkötések a táblához `contacts`
--
ALTER TABLE `contacts`
  ADD CONSTRAINT `FK_contacts_orderID` FOREIGN KEY (`orderID`) REFERENCES `orders` (`ID`) ON DELETE NO ACTION,
  ADD CONSTRAINT `FK_contacts_userID` FOREIGN KEY (`userID`) REFERENCES `users` (`ID`) ON DELETE NO ACTION;

--
-- Megkötések a táblához `delivery`
--
ALTER TABLE `delivery`
  ADD CONSTRAINT `FK_delivery_delivery_progressID` FOREIGN KEY (`delivery_progressID`) REFERENCES `delivery_progresses` (`ID`) ON DELETE NO ACTION,
  ADD CONSTRAINT `FK_delivery_orderID` FOREIGN KEY (`orderID`) REFERENCES `orders` (`ID`) ON DELETE NO ACTION,
  ADD CONSTRAINT `FK_delivery_userID` FOREIGN KEY (`userID`) REFERENCES `users` (`ID`) ON DELETE NO ACTION;

--
-- Megkötések a táblához `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `FK_orders_billing_address` FOREIGN KEY (`billing_address`) REFERENCES `billing_addresses` (`ID`) ON DELETE NO ACTION,
  ADD CONSTRAINT `FK_orders_payment_methodID` FOREIGN KEY (`payment_methodID`) REFERENCES `payment_methods` (`ID`) ON DELETE NO ACTION,
  ADD CONSTRAINT `FK_orders_personal_address` FOREIGN KEY (`personal_address`) REFERENCES `personal_addresses` (`ID`) ON DELETE NO ACTION,
  ADD CONSTRAINT `FK_orders_userID` FOREIGN KEY (`userID`) REFERENCES `users` (`ID`) ON DELETE NO ACTION;

--
-- Megkötések a táblához `orders_extras`
--
ALTER TABLE `orders_extras`
  ADD CONSTRAINT `FK_orders_extras_extraID` FOREIGN KEY (`extraID`) REFERENCES `extras` (`ID`) ON DELETE NO ACTION,
  ADD CONSTRAINT `FK_orders_extras_orderID` FOREIGN KEY (`orderID`) REFERENCES `orders` (`ID`) ON DELETE NO ACTION;

--
-- Megkötések a táblához `orders_products`
--
ALTER TABLE `orders_products`
  ADD CONSTRAINT `FK_orders_products_orderID` FOREIGN KEY (`orderID`) REFERENCES `orders` (`ID`) ON DELETE NO ACTION,
  ADD CONSTRAINT `FK_orders_products_productID` FOREIGN KEY (`productID`) REFERENCES `products` (`ID`) ON DELETE NO ACTION;

--
-- Megkötések a táblához `personal_addresses`
--
ALTER TABLE `personal_addresses`
  ADD CONSTRAINT `FK_personal_addresses_city` FOREIGN KEY (`city`) REFERENCES `cities` (`ID`) ON DELETE NO ACTION,
  ADD CONSTRAINT `FK_personal_addresses_userID` FOREIGN KEY (`userID`) REFERENCES `users` (`ID`) ON DELETE NO ACTION;

--
-- Megkötések a táblához `questions`
--
ALTER TABLE `questions`
  ADD CONSTRAINT `FK_questions_productID` FOREIGN KEY (`productID`) REFERENCES `products` (`ID`) ON DELETE NO ACTION,
  ADD CONSTRAINT `FK_questions_userID` FOREIGN KEY (`userID`) REFERENCES `users` (`ID`) ON DELETE NO ACTION;

--
-- Megkötések a táblához `question_answers`
--
ALTER TABLE `question_answers`
  ADD CONSTRAINT `FK_question_answers_questionID` FOREIGN KEY (`questionID`) REFERENCES `questions` (`ID`) ON DELETE NO ACTION,
  ADD CONSTRAINT `FK_question_answers_userID` FOREIGN KEY (`userID`) REFERENCES `users` (`ID`) ON DELETE NO ACTION;

--
-- Megkötések a táblához `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `FK_reviews_productID` FOREIGN KEY (`productID`) REFERENCES `products` (`ID`) ON DELETE NO ACTION,
  ADD CONSTRAINT `FK_reviews_userID` FOREIGN KEY (`userID`) REFERENCES `users` (`ID`) ON DELETE NO ACTION;

--
-- Megkötések a táblához `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `FK_users_position` FOREIGN KEY (`position`) REFERENCES `positions` (`ID`) ON DELETE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
