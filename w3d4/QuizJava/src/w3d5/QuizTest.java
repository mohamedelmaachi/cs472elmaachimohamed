
package w3d5;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

public class QuizTest {
    private Quiz quizUnderTest = new Quiz();;

    @Test
    public void testIsCorrect() {
        /* at first question, answer should be "9" */
        assertTrue("first question answer should be '9'", quizUnderTest.isCorrect(6));
    }

    @Test
    public void testGetNumberQuestions() {
        /* answer should be 5 regardless of what question we're at */
        assertEquals(5, quizUnderTest.getNumQuestions());
    }

    @Test
    public void testGetNumberCorrect() {
        /* at first question, answer should be 0 */
        assertEquals(0, quizUnderTest.getNumCorrect());

        quizUnderTest.setCurrentQuesitionIndex(1); // increments the score and the current question number
        assertEquals(0, quizUnderTest.getNumCorrect());
        assertEquals(2, quizUnderTest.getCurrentQuesitionIndex());
    }
}