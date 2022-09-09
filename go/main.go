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
}

func fft(p []float32) int {
	fmt.Println(p)
	return 1
}
