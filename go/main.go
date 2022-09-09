package main

import "fmt"

func main() {
	matrix := [...][3]int{
		[...]int{1, 2, 3},
		[...]int{1, 2, 3},
		[...]int{1, 2, 3},
	}
	fmt.Println(matrix)

	fmt.Println(fft([]float32{1, 2, 3}))

	test := make([]int, 1, 100)
	test[0] = 1
	fmt.Println(test, len(test), cap(test))
	test2 := append(test, 2, 3, 4)
	fmt.Println(test2, len(test2), cap(test2))
	test2[0] = -1
	fmt.Println(test)
	fmt.Println(test2)
}

func fft(p []float32) int {
	fmt.Println(p)
	return 1
}
