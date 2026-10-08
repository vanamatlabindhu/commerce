import java.util.*;

public class StudentGradeTracker {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ArrayList<Integer> marks = new ArrayList<>();

        System.out.print("Enter number of students: ");
        int n = sc.nextInt();

        // Input marks
        for (int i = 0; i < n; i++) {
            System.out.print("Enter marks of student " + (i + 1) + ": ");
            int m = sc.nextInt();
            marks.add(m);
        }

        // Calculate sum, highest, lowest
        int sum = 0;
        int highest = marks.get(0);
        int lowest = marks.get(0);

        for (int m : marks) {
            sum += m;

            if (m > highest) {
                highest = m;
            }

            if (m < lowest) {
                lowest = m;
            }
        }

        double average = (double) sum / n;

        // Output
        System.out.println("\n----- Result -----");
        System.out.println("Average: " + average);
        System.out.println("Highest: " + highest);
        System.out.println("Lowest: " + lowest);
    }
}