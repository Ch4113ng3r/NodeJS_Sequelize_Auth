/*
MySQL Data Transfer
Source Host: localhost
Source Database: test
Target Host: localhost
Target Database: test
Date: 14-09-2017 12:04:47 PM
*/

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `user_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records 
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'ankit', 'ankit');
INSERT INTO `users` VALUES ('2', 'ankit1', 'ankit1');
INSERT INTO `users` VALUES ('3', 'ankit2', 'ankit2');
INSERT INTO `users` VALUES ('4', 'ankit3', 'ankit3');
INSERT INTO `users` VALUES ('5', 'ankit4', 'ankit4');
INSERT INTO `users` VALUES ('6', 'ankit5', 'ankit5');
INSERT INTO `users` VALUES ('7', 'ankit6', 'ankit6');
INSERT INTO `users` VALUES ('8', 'ankit7', 'ankit7');
INSERT INTO `users` VALUES ('9', 'ankit8', 'ankit8');
INSERT INTO `users` VALUES ('10', 'ankit9', 'ankit9');
INSERT INTO `users` VALUES ('11', 'ankit0', 'ankit0');
