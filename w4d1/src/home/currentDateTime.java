package home;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;

public class currentDateTime extends SimpleTagSupport {
	private String color;
	private String size;

	public void doTag() throws JspException, IOException {

		String span = "";
		Date dNow = new Date();
		JspWriter out = getJspContext().getOut();
		SimpleDateFormat ft = new SimpleDateFormat("E yyyy.MM.dd 'at' hh:mm:ss a zzz");
		if (color != null) {
			color = " color: " + color + ";";
		}
		if (size != null) {
			size = " font-size: " + size + ";";
		}
		span = String.format("<span style=\" %s %s\">Current Date: %s </span>", color, size,ft.format(dNow));
		out.println(span);

	}

	public void setColor(String color) {
		this.color = color;
	}

	public void setSize(String size) {
		this.size = size;
	}
}
