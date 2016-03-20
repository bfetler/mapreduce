/* loops.c      test for loop speed in C
   to compile:  cc -o loopC -lm loops.c
   to run:      ./loopC  (need chmod a+x loopC)

   map run time in C is ~100 times faster than Python.

   sources on MacOSX (as on most Linux systems):
     /usr/include/stdio.h
     /usr/include/sys/time.h
     /usr/include/math.h
*/

#include <stdio.h>
#include <sys/time.h>
#include <math.h>

#define LOOPS 20
#define MAX 1000000

long int get_timediff(struct timeval t1, struct timeval t2) {
  long int diff = (t2.tv_sec - t1.tv_sec)*1000000L + t2.tv_usec - t1.tv_usec;
  printf(" %ld", diff);
  return diff;
}

int main(int argc, char **argv) {
  struct timeval t1 = { 0 }, t2 = { 0 };

  long int delta[LOOPS], avg=0;
  double sigma=0.0;
  int arr[MAX];

  printf("array size %d, delta times (us):", MAX);
  for (int j=0; j<LOOPS; j++) {
    for (int i=0; i<MAX; i++) {
      arr[i] = i;
    }

    gettimeofday(&t1, NULL);
/*  map operation */
    for (int i=0; i<MAX; i++) {
      arr[i] *= 2;
    }
    gettimeofday(&t2, NULL);

    delta[j] = get_timediff(t1, t2);
  }
  for (int j=0; j<LOOPS; j++) {
    avg += delta[j];
    sigma += (double) (delta[j] * delta[j]);
  }
  avg /= LOOPS;
  sigma = sqrt(sigma) / (double)LOOPS;
  printf("\n  time average: %ld +- %.1f us\n", avg, sigma);

  return 0;
}

