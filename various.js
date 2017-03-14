/*unsigned int bitCount (unsigned int value) {
    unsigned int count = 0;
    while (value > 0) {           // until all bits are zero
        if ((value & 1) == 1)     // check lower bit
            count++;
        value >>= 1;              // shift bits, removing lower bit
    }
    return count;
}*/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     public int val;
 *     public ListNode next;
 *     ListNode(int x) { val = x; next = null; }
 * }
 */
public class Solution {
	public ListNode detectCycle(ListNode node) {
	   
	    ListNode slow = node;
	    ListNode fast = node;
	    boolean found = false;
        while (slow != null && fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            // If slow and fast meet at same point then loop is present
            if (slow == fast) {
                found = true;
                 break;
            }
        }
        
        if(found) {
            slow = node;
            while(fast != slow){
                fast= fast.next;
                slow = slow.next;
            }
            return slow;
        }
        return null;
	}
}

