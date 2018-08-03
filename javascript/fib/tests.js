(function() {
	"use strict";

	let fib = window.fib;

	QUnit.test("Fib is defined", function(assert) {
		assert.equal(typeof fib, "function", "fib is a function");
	});

	QUnit.test("Fib easy tests", function(assert) {
		assert.equal(fib(0), 0, "Check fib(0)");
		assert.equal(fib(1), 1, "Check fib(1)");
		assert.equal(fib(2), 1, "Check fib(2)");
		assert.equal(fib(3), 2, "Check fib(3)");
		assert.equal(fib(4), 3, "Check fib(4)");
		assert.equal(fib(5), 5, "Check fib(5)");
		assert.equal(fib(6), 8, "Check fib(6)");
		assert.equal(fib(7), 13, "Check fib(7)");
		assert.equal(fib(8), 21, "Check fib(8)");
		assert.equal(fib(9), 34, "Check fib(9)");
		assert.equal(fib(10), 55, "Check fib(10)");
		assert.equal(fib(11), 89, "Check fib(11)");
		assert.equal(fib(12), 144, "Check fib(12)");
		assert.equal(fib(13), 233, "Check fib(13)");
		assert.equal(fib(14), 377, "Check fib(14)");
		assert.equal(fib(15), 610, "Check fib(15)");
		assert.equal(fib(16), 987, "Check fib(16)");
		assert.equal(fib(17), 1597, "Check fib(17)");
		assert.equal(fib(18), 2584, "Check fib(18)");
		assert.equal(fib(19), 4181, "Check fib(19)");
		assert.equal(fib(20), 6765, "Check fib(20)");
		assert.equal(fib(21), 10946, "Check fib(21)");
		assert.equal(fib(22), 17711, "Check fib(22)");
		assert.equal(fib(23), 28657, "Check fib(23)");
		assert.equal(fib(24), 46368, "Check fib(24)");
		assert.equal(fib(25), 75025, "Check fib(25)");
		assert.equal(fib(26), 121393, "Check fib(26)");
		assert.equal(fib(27), 196418, "Check fib(27)");
		assert.equal(fib(28), 317811, "Check fib(28)");
		assert.equal(fib(29), 514229, "Check fib(29)");
	});

	/*
	QUnit.test("Fib medium tests", function(assert) {
		assert.equal(fib(30), 832040, "Check fib(30)");
		assert.equal(fib(31), 1346269, "Check fib(31)");
		assert.equal(fib(32), 2178309, "Check fib(32)");
		assert.equal(fib(33), 3524578, "Check fib(33)");
		assert.equal(fib(34), 5702887, "Check fib(34)");
		assert.equal(fib(35), 9227465, "Check fib(35)");
		assert.equal(fib(36), 14930352, "Check fib(36)");
		assert.equal(fib(37), 24157817, "Check fib(37)");
		assert.equal(fib(38), 39088169, "Check fib(38)");
		assert.equal(fib(39), 63245986, "Check fib(39)");
		assert.equal(fib(40), 102334155, "Check fib(40)");
		assert.equal(fib(41), 165580141, "Check fib(41)");
		assert.equal(fib(42), 267914296, "Check fib(42)");
		assert.equal(fib(43), 433494437, "Check fib(43)");
		assert.equal(fib(44), 701408733, "Check fib(44)");
		assert.equal(fib(45), 1134903170, "Check fib(45)");
		assert.equal(fib(46), 1836311903, "Check fib(46)");
		assert.equal(fib(47), 2971215073, "Check fib(47)");
		assert.equal(fib(48), 4807526976, "Check fib(48)");
		assert.equal(fib(49), 7778742049, "Check fib(49)");
	});
	*/

	/*
	QUnit.test("Fib hard tests", function(assert) {
		assert.equal(fib(50), 12586269025, "Check fib(50)");
		assert.equal(fib(51), 20365011074, "Check fib(51)");
		assert.equal(fib(52), 32951280099, "Check fib(52)");
		assert.equal(fib(53), 53316291173, "Check fib(53)");
		assert.equal(fib(54), 86267571272, "Check fib(54)");
		assert.equal(fib(55), 139583862445, "Check fib(55)");
		assert.equal(fib(56), 225851433717, "Check fib(56)");
		assert.equal(fib(57), 365435296162, "Check fib(57)");
		assert.equal(fib(58), 591286729879, "Check fib(58)");
		assert.equal(fib(59), 956722026041, "Check fib(59)");
		assert.equal(fib(60), 1548008755920, "Check fib(60)");
		assert.equal(fib(61), 2504730781961, "Check fib(61)");
		assert.equal(fib(62), 4052739537881, "Check fib(62)");
		assert.equal(fib(63), 6557470319842, "Check fib(63)");
		assert.equal(fib(64), 10610209857723, "Check fib(64)");
		assert.equal(fib(65), 17167680177565, "Check fib(65)");
		assert.equal(fib(66), 27777890035288, "Check fib(66)");
		assert.equal(fib(67), 44945570212853, "Check fib(67)");
		assert.equal(fib(68), 72723460248141, "Check fib(68)");
		assert.equal(fib(69), 117669030460994, "Check fib(69)");
		assert.equal(fib(70), 190392490709135, "Check fib(70)");
		assert.equal(fib(71), 308061521170129, "Check fib(71)");
		assert.equal(fib(72), 498454011879264, "Check fib(72)");
		assert.equal(fib(73), 806515533049393, "Check fib(73)");
		assert.equal(fib(74), 1304969544928657, "Check fib(74)");
		assert.equal(fib(75), 2111485077978050, "Check fib(75)");
		assert.equal(fib(76), 3416454622906707, "Check fib(76)");
		assert.equal(fib(77), 5527939700884757, "Check fib(77)");
		assert.equal(fib(78), 8944394323791464, "Check fib(78)");
		assert.equal(fib(79), 14472334024676220, "Check fib(79)");
		assert.equal(fib(80), 23416728348467684, "Check fib(80)");
		assert.equal(fib(81), 37889062373143900, "Check fib(81)");
		assert.equal(fib(82), 61305790721611580, "Check fib(82)");
		assert.equal(fib(83), 99194853094755490, "Check fib(83)");
		assert.equal(fib(84), 160500643816367070, "Check fib(84)");
		assert.equal(fib(85), 259695496911122560, "Check fib(85)");
		assert.equal(fib(86), 420196140727489660, "Check fib(86)");
		assert.equal(fib(87), 679891637638612200, "Check fib(87)");
		assert.equal(fib(88), 1100087778366101900, "Check fib(88)");
		assert.equal(fib(89), 1779979416004714000, "Check fib(89)");
		assert.equal(fib(90), 2880067194370816000, "Check fib(90)");
		assert.equal(fib(91), 4660046610375530000, "Check fib(91)");
		assert.equal(fib(92), 7540113804746346000, "Check fib(92)");
		assert.equal(fib(93), 12200160415121877000, "Check fib(93)");
		assert.equal(fib(94), 19740274219868226000, "Check fib(94)");
		assert.equal(fib(95), 31940434634990100000, "Check fib(95)");
		assert.equal(fib(96), 51680708854858330000, "Check fib(96)");
		assert.equal(fib(97), 83621143489848430000, "Check fib(97)");
		assert.equal(fib(98), 135301852344706760000, "Check fib(98)");
		assert.equal(fib(99), 218922995834555200000, "Check fib(99)");
	});
	*/
}());
