/* loops.c      test for loop speed in C
   to compile:  cc -o loopC -lm loops.c
   to run:      ./loopC  (need chmod a+x loopC)

   include sources on MacOSX are:
     /usr/include/stdio.h
     /usr/include/sys/time.h
*/

#include <stdio.h>
#include <sys/time.h>

#define MAX 1000000

int main(int argc, char **argv) {
  struct timeval t1 = { 0 }, t2 = { 0 };

  int arr[MAX];

  printf("loop count %d  ", MAX);
  for (int i=0; i<MAX; i++) {
    arr[i] = i;
  }

  gettimeofday(&t1, NULL);
  for (int i=0; i<MAX; i++) {
    arr[i] *= 2;
  }
  gettimeofday(&t2, NULL);

  printf("  delta time: %ld us\n", (t2.tv_sec - t1.tv_sec)*1000000L + t2.tv_usec - t1.tv_usec);

  return 0;
}

